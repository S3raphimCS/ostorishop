import json

from orders.models.discount import Discount, UsedDiscount
from orders.models.orders import Order
from rest_framework.viewsets import GenericViewSet, generics
from rest_framework.generics import CreateAPIView
from drf_yasg.utils import swagger_auto_schema
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status
from orders.serializers.order import OrderSerializer, DiscountSerializer
from orders.serializers.payment import CreatePaymentSerializer
from rest_framework.permissions import IsAuthenticated
from authentication.permissions import IsAuthenticatedAndOwner
from rest_framework.permissions import IsAdminUser, OR
from rest_framework.mixins import CreateModelMixin
from cart.models import CartProduct
from cart.views import get_total_price
from docs.orders.schemas import discount_schema
from docs.utils.schemas import error_schema
from django.utils import timezone
from orders.services.create_payment import create_payment
from orders.services.payment_acceptance import payment_acceptance


class OrderViewSet(CreateModelMixin, GenericViewSet):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_permissions(self):
        permissions = [IsAuthenticated]
        if self.action == 'get_order':
            return [OR(IsAuthenticatedAndOwner(), IsAdminUser())]
        return [permission() for permission in permissions]

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user)

    @swagger_auto_schema(tags=["Orders"], operation_summary="Получить все заказы")
    def get(self, request: Request):
        orders = self.get_queryset()
        serializer = self.get_serializer(data=orders, many=True)
        serializer.is_valid()
        return Response(serializer.data, status=status.HTTP_200_OK)

    @swagger_auto_schema(tags=["Orders"], operation_summary="Получить информацию о заказе")
    def get_order(self, request: Request, id):
        queryset = Order.objects.filter(id=id)
        if queryset:
            serializer = self.get_serializer(data=queryset)
            serializer.is_valid()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({"error": "Заказ не найден", "code": 404}, status=status.HTTP_404_NOT_FOUND)

    @swagger_auto_schema(tags=["Orders"], operation_summary="Оплата заказа")
    def payment(self, request: Request):
        pass

    @swagger_auto_schema(tags=["Orders"], operation_summary="Создать заказ из товаров корзины")
    def post(self, request: Request, *args, **kwargs):
        order_items = CartProduct.objects.filter(user=self.request.user)
        price = get_total_price(order_items)

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.validated_data["price"] = price
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    @swagger_auto_schema(tags=['Orders'], operation_summary="Проверить скидку на товарах в корзине", responses={
        status.HTTP_200_OK: DiscountSerializer,
        status.HTTP_400_BAD_REQUEST: error_schema,
        status.HTTP_401_UNAUTHORIZED: error_schema,
        status.HTTP_404_NOT_FOUND: error_schema
    },
                         request_body=discount_schema)
    def check_discount(self, request: Request):
        discount = Discount.objects.filter(promocode=self.request.data["promocode"]).first()
        cart_items = CartProduct.objects.filter(user=self.request.user)
        discount_message, response_status = self._use_discount(discount, cart_items)

        return Response(discount_message, status=response_status)

    @staticmethod
    def _use_discount(discount, order_items):
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


class CreatePaymentView(CreateAPIView):
    serializer_class = CreatePaymentSerializer

    def post(self, request: Request, *args, **kwargs):
        serializer = CreatePaymentSerializer(data=self.request.data)

        serializer.is_valid(raise_exception=True)

        confirmation_url = create_payment(serializer.validated_data)

        return Response({"confirmation_url": confirmation_url}, status=status.HTTP_200_OK)


# TODO Переписать json.loads
class CreatePaymentAcceptanceView(CreateAPIView):

    def post(self, request: Request, *args, **kwargs):
        response = json.loads(self.request.data)

        if payment_acceptance(response):
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)
