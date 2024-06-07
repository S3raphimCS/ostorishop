from django.forms.models import model_to_dict
from drf_yasg.utils import swagger_auto_schema
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.mixins import UpdateModelMixin
from rest_framework.permissions import IsAuthenticated
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet

from docs.cart.descriptions import (ADD_PRODUCT_TO_CART_POST_DESC,
                                    CART_PRODUCT_DELETE_DESC,
                                    CART_PRODUCT_GET_DESC,
                                    CART_TOTAL_PRICE_GET_DESC,
                                    FAVORITE_PRODUCT_DELETE_DESC,
                                    FAVORITE_PRODUCT_GET_DESC,
                                    FAVORITE_PRODUCT_POST_DESC,
                                    UPDATE_CART_PRODUCT_PUT_DESC)
from docs.cart.schemas import cart_price_schema
from docs.utils.schemas import error_list_schema, error_schema
from shop.models import Product

from .models import CartProduct, FavoriteProduct
from .serializers import CartProductSerializer, FavoriteProductSerializer


class CartProductViewSet(UpdateModelMixin, GenericViewSet):
    serializer_class = CartProductSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = CartProduct.objects.filter(user=self.request.user)
        return queryset

    @swagger_auto_schema(tags=["Cart"], operation_description=CART_TOTAL_PRICE_GET_DESC, responses={
        status.HTTP_200_OK: cart_price_schema,
        status.HTTP_401_UNAUTHORIZED: error_list_schema
    }, operation_summary="Получить сумму товаров в корзине",
                         operation_id="cart_total_price")
    def cart_total_price(self, request):
        products = CartProduct.objects.filter(user=request.user)
        total_price = get_total_price(products)
        if products:
            return Response({
                "total_price": total_price,
            }, status=status.HTTP_200_OK)
        else:
            return Response({
                "total_price": 0,
            }, status=status.HTTP_200_OK)

    @swagger_auto_schema(tags=["Cart"],
                         operation_summary="Удалить товар из корзины",
                         operation_description=CART_PRODUCT_DELETE_DESC, responses={
            status.HTTP_204_NO_CONTENT: "",
            status.HTTP_401_UNAUTHORIZED: error_list_schema,
            status.HTTP_403_FORBIDDEN: error_schema,
            status.HTTP_404_NOT_FOUND: error_schema
        }, operation_id="delete_cart_item")
    def delete(self, request: Request, id):
        instance = CartProduct.objects.filter(id=id).first()
        if instance.user != self.request.user and not self.request.user.is_admin:
            return Response({"error": "У вас нет прав для выполнения операции", "code": 403},
                            status=status.HTTP_403_FORBIDDEN)
        if instance:
            instance.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response({"error": "Товара с таким ID нет", "code": 404}, status=status.HTTP_404_NOT_FOUND)

    @swagger_auto_schema(tags=['Cart'], operation_description=CART_PRODUCT_GET_DESC, responses={
        status.HTTP_200_OK: CartProductSerializer,
        status.HTTP_400_BAD_REQUEST: error_schema,
        status.HTTP_401_UNAUTHORIZED: error_schema
    }, operation_summary='Товары в корзине', operation_id='cart_items')
    def get(self, request: Request):
        queryset = self.get_queryset()
        serializer = self.get_serializer(data=queryset, many=True)
        serializer.is_valid()
        return Response(serializer.data, status=status.HTTP_200_OK)

    @swagger_auto_schema(tags=["Cart"], operation_description=ADD_PRODUCT_TO_CART_POST_DESC, responses={
        status.HTTP_204_NO_CONTENT: "",
        status.HTTP_400_BAD_REQUEST: error_schema,
        status.HTTP_401_UNAUTHORIZED: error_schema
    }, operation_summary="Добавить товар в корзину")
    @action(detail=False, methods=["post"])
    def add_to_cart(self, request: Request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.validated_data["user"] = self.request.user
        serializer.create(serializer.validated_data)
        return Response(status=status.HTTP_204_NO_CONTENT)

    @swagger_auto_schema(tags=["Cart"], operation_description=UPDATE_CART_PRODUCT_PUT_DESC, responses={
        status.HTTP_204_NO_CONTENT: "",
        status.HTTP_401_UNAUTHORIZED: error_schema,
        status.HTTP_404_NOT_FOUND: error_schema
    }, operation_summary='Изменить товар в корзине')
    @action(detail=False, methods=['put'])
    def update(self, request: Request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        cartProduct = CartProduct.objects.filter(user=request.user, product_id=request.data["product"]["id"]).first()
        if cartProduct:
            instance = CartProduct.objects.filter(user=request.user, product_id=request.data["product"]["id"]).first()
            serializer.update(instance, serializer.validated_data)
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response({"error": "Такого товара нет в корзине", "code": 404}, status=status.HTTP_404_NOT_FOUND)


class FavoriteProductViewSet(GenericViewSet):
    serializer_class = FavoriteProductSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = FavoriteProduct.objects.filter(user=self.request.user)
        return queryset

    @swagger_auto_schema(tags=["Favorite"], operation_description=FAVORITE_PRODUCT_GET_DESC, responses={
        status.HTTP_200_OK: FavoriteProductSerializer,
        status.HTTP_400_BAD_REQUEST: error_schema,
        status.HTTP_401_UNAUTHORIZED: error_schema
    }, operation_summary="Получить избранные товары")
    @action(detail=False, methods=["get"])
    def get(self, request: Request):
        queryset = self.get_queryset()
        return Response(queryset, status=status.HTTP_200_OK)

    @swagger_auto_schema(tags=["Favorite"], operation_description=FAVORITE_PRODUCT_POST_DESC, responses={
        status.HTTP_200_OK: FavoriteProductSerializer,
        status.HTTP_400_BAD_REQUEST: error_schema,
        status.HTTP_404_NOT_FOUND: error_schema
    }, operation_summary="Добавить товар в избранное")
    def post(self, request: Request, product_id: int):
        product = Product.objects.filter(id=product_id).first()
        user = self.request.user
        if FavoriteProduct.objects.filter(user=self.request.user,
                                          product=Product.objects.filter(id=product_id).first()).first():
            return Response({"error": "Товар уже в избранных", "code": 400}, status=status.HTTP_400_BAD_REQUEST)

        if product:
            serializer = self.get_serializer(data={"product": model_to_dict(product)})
            serializer.is_valid(raise_exception=True)
            serializer.validated_data["user"] = user
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Такого товара не существует", "code": 404}, status=status.HTTP_404_NOT_FOUND)

    @swagger_auto_schema(tags=["Favorite"], operation_description=FAVORITE_PRODUCT_DELETE_DESC, responses={
        status.HTTP_204_NO_CONTENT: "",
        status.HTTP_401_UNAUTHORIZED: error_schema,
        status.HTTP_404_NOT_FOUND: error_schema
    }, operation_summary="Удалить товар из избранного")
    def delete(self, request: Request, id):
        instance = FavoriteProduct.objects.filter(id=id).first()
        if instance:
            instance.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response({"error": "Избранного товара с таким ID нет", "code": 404},
                            status=status.HTTP_404_NOT_FOUND)


def get_total_price(products: list):
    total_price = 0
    for product in products:
        total_price += product.product.price * product.count
    return total_price
