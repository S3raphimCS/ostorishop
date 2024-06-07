from django.conf import settings
from django.utils import timezone
from drf_yasg.utils import swagger_auto_schema
from rest_framework import status
from rest_framework.mixins import CreateModelMixin
from rest_framework.permissions import (OR, AllowAny, IsAdminUser,
                                        IsAuthenticated)
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet

from authentication.permissions import IsAuthenticatedAndOwner
from cart.models import CartProduct
from cart.views import get_total_price
from docs.orders.descriptions import (CHECK_DISCOUNT_POST_DESC,
                                      ORDER_CREATE_POST_DESC,
                                      ORDER_DETAIL_GET_DESC,
                                      ORDER_LIST_GET_DESC,
                                      PAYMENT_ACCEPT_POST_DESC,
                                      PAYMENT_CREATE_POST_DESC)
from docs.orders.schemas import discount_schema, payment_create_schema
from docs.utils.schemas import error_schema, url_schema
from orders.models.discount import Discount
from orders.models.orders import Order, OrderItem
from orders.serializers.order import DiscountSerializer, OrderSerializer

from .services import create_payment, payment_acceptance


class OrderViewSet(CreateModelMixin, GenericViewSet):
    serializer_class = OrderSerializer

    def get_permissions(self):
        permissions = [IsAuthenticated]
        if self.action == 'get_order':
            return [OR(IsAuthenticatedAndOwner(), IsAdminUser())]
        elif self.action == 'payment_create':
            return [IsAuthenticatedAndOwner()]
        elif self.action == 'payment_acceptance':
            return [AllowAny()]
        return [permission() for permission in permissions]

    def get_queryset(self):
        if self.request.user.is_anonymous:
            return None
        return Order.objects.filter(user=self.request.user)

    @swagger_auto_schema(tags=["Orders"], responses={
        status.HTTP_200_OK: OrderSerializer,
        status.HTTP_401_UNAUTHORIZED: error_schema
    }, operation_summary="Получить все заказы", operation_description=ORDER_LIST_GET_DESC)
    def get(self, request: Request):
        orders = self.get_queryset()
        if not orders:
            return Response(status=status.HTTP_204_NO_CONTENT)
        serializer = self.get_serializer(data=orders, many=True)
        serializer.is_valid()
        return Response(serializer.data, status=status.HTTP_200_OK)

    @swagger_auto_schema(tags=["Orders"], responses={
        status.HTTP_200_OK: OrderSerializer,
        status.HTTP_401_UNAUTHORIZED: error_schema,
        status.HTTP_404_NOT_FOUND: error_schema
    }, operation_description=ORDER_DETAIL_GET_DESC, operation_summary="Получить информацию о заказе")
    def get_order(self, request: Request, id):
        queryset = Order.objects.filter(id=id)
        if queryset:
            serializer = self.get_serializer(data=queryset)
            serializer.is_valid()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({"error": "Заказ не найден", "code": 404}, status=status.HTTP_404_NOT_FOUND)

    @swagger_auto_schema(tags=["Orders"], responses={
        status.HTTP_204_NO_CONTENT: "",
        status.HTTP_401_UNAUTHORIZED: error_schema
    }, operation_description=PAYMENT_ACCEPT_POST_DESC,
                         operation_summary="Получение информации о заказе от API сервиса оплаты")
    def payment_acceptance(self, request: Request):
        if "recipient" in request.data["object"].keys():
            if request.data["object"]["recipient"]["account_id"] == settings.YOOKASSA_ACCOUNT_ID:
                payment_acceptance.payment_acceptance(request.data)
                return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_403_FORBIDDEN)

    @swagger_auto_schema(tags=["Orders"], responses={
        status.HTTP_400_BAD_REQUEST: error_schema,
        status.HTTP_404_NOT_FOUND: error_schema,
        status.HTTP_302_FOUND: url_schema
    }, operation_description=PAYMENT_CREATE_POST_DESC,
                         operation_summary="Сформировать ссылку оплаты от сервиса для заказа по его ID",
                         request_body=payment_create_schema)
    def payment_create(self, request: Request):
        id = request.data["order_id"]
        return_url = request.data["return_url"]
        order = Order.objects.filter(id=id).first()
        if not order:
            return Response(data={"detail": "Заказ не найден", "code": 404}, status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(instance=order)
        payment_url = create_payment.get_or_create_payment(validated_data=serializer.data, return_url=return_url,
                                                           idempotence_key=order.idempotence_key)
        if isinstance(payment_url, tuple):
            return Response(data=payment_url[0], status=payment_url[1])
        return Response(data={"redirect_url": payment_url}, status=status.HTTP_302_FOUND)

    @swagger_auto_schema(tags=["Orders"], responses={
        status.HTTP_201_CREATED: OrderSerializer,
        status.HTTP_400_BAD_REQUEST: error_schema,
        status.HTTP_401_UNAUTHORIZED: error_schema
    }, operation_description=ORDER_CREATE_POST_DESC, operation_summary="Создать заказ из товаров корзины")
    def post(self, request: Request, *args, **kwargs):
        order_items = CartProduct.objects.filter(user=self.request.user)
        for item in order_items:
            if not item.product.available:
                return Response(
                    data={"detail": "Невозможно сформировать заказ, так как одного или более товаров нет в наличии"},
                    status=status.HTTP_400_BAD_REQUEST)
        discount = Discount.objects.get(
            promocode=request.data["discount"]["promocode"]) if "discount" in request.data.keys() else None
        price = self._use_discount(discount, order_items)[0]["total_price"]
        order_items = self._create_order_items_from_cart(order_items, self.request.user)

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.validated_data['discount'] = discount
        serializer.validated_data["price"] = price
        serializer.validated_data["order_items"] = order_items
        order = serializer.save()
        self._add_items_to_order(order, order_items)
        self._clean_cart(self.request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    @swagger_auto_schema(tags=['Orders'], responses={
        status.HTTP_200_OK: DiscountSerializer,
        status.HTTP_400_BAD_REQUEST: error_schema,
        status.HTTP_401_UNAUTHORIZED: error_schema,
        status.HTTP_404_NOT_FOUND: error_schema
    }, operation_description=CHECK_DISCOUNT_POST_DESC, operation_summary="Проверить скидку на товарах в корзине",
                         request_body=discount_schema)
    def check_discount(self, request: Request):
        discount = Discount.objects.filter(promocode=self.request.data["promocode"]).first()
        cart_items = CartProduct.objects.filter(user=self.request.user)
        discount_message, response_status = self._use_discount(discount, cart_items)

        return Response(discount_message, status=response_status)

    @staticmethod
    def _add_items_to_order(order, items):
        for item in items:
            item.order = order
            item.save()

    @staticmethod
    def _create_order_items_from_cart(cartProducts, user):
        """Создает объекты OrderItem из товаров корзины"""
        result_items = []
        for product in cartProducts:
            result_items.append(
                OrderItem.objects.create(product=product.product, user=user, count=product.count,
                                         size=product.size, color=product.color))
        return result_items

    @staticmethod
    def _clean_cart(user):
        """Удаляет все товары в корзине пользователя"""
        products = CartProduct.objects.filter(user=user)
        for product in products:
            product.delete()

    @staticmethod
    def _use_discount(discount, order_items):
        """Применяет скидку к товарам, подходящим по категориям скидки либо применяет скидку ко всем товарам,
        если не выбраны категории у скидки"""
        if not discount or timezone.now() > discount.date_of_end or not order_items:
            return {"message": "Промокод истек/не найден или нет товаров в корзине.",
                    "total_price": get_total_price(order_items)}, status.HTTP_400_BAD_REQUEST

        order_price = 0
        old_price = get_total_price(order_items)
        if not discount.product_categories.all():
            return {"message": "Промокод успешно применен",
                    "total_price": old_price * (100 - discount.discount_amount) / 100}, status.HTTP_200_OK
        for cartproduct in order_items:
            product = cartproduct.product
            if any(product_category in product.categories.all() for product_category in
                   discount.product_categories.all()):
                order_price += product.price * (100 - discount.discount_amount) / 100
            else:
                order_price += product.price
        if old_price == order_price:
            return {"message": "Невозможно применить промокод к данным товарам",
                    "total_price": order_price}, status.HTTP_400_BAD_REQUEST
        return {"message": "Промокод успешно применен",
                "total_price": order_price}, status.HTTP_200_OK
