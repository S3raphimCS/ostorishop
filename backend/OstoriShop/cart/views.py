from .models import FavoriteProduct, CartProduct
from shop.models import Product
from rest_framework import generics
from .serializers import CartProductSerializer, FavoriteProductSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.mixins import CreateModelMixin, UpdateModelMixin
from django.db.models import Sum
from rest_framework import status
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from rest_framework.viewsets import GenericViewSet
from rest_framework.decorators import action
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from rest_framework.request import Request
from django.forms.models import model_to_dict


class CartProductViewSet(UpdateModelMixin, GenericViewSet):
    serializer_class = CartProductSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = CartProduct.objects.filter(user=self.request.user)
        return queryset

    @swagger_auto_schema(tags=["Cart"], responses={}, operation_summary="Получить сумму товаров в корзине",
                         operation_id="cart_total_price")
    def cart_total_price(self, request):
        products = CartProduct.objects.filter(user=request.user)
        if products:
            return Response({
                "total_price": products.aggregate(Sum("product__price"))["product__price__sum"],
            })
        else:
            return Response({
                "total_price": 0,
            })

    @swagger_auto_schema(tags=["Cart"],
                         operation_summary="Удалить товар из корзины",
                         operation_id="delete_cart_item")
    def delete(self, request: Request, id):
        instance = CartProduct.objects.filter(id=id).first()
        if instance:
            instance.delete()
            return Response(status=status.HTTP_200_OK)
        else:
            return Response({"error": "Товара с таким ID нет"}, status=status.HTTP_404_NOT_FOUND)

    @swagger_auto_schema(tags=['Cart'], responses={
    }, operation_summary='Товары в корзине', operation_id='cart_items')
    def get(self, request: Request):
        queryset = self.get_queryset()
        serializer = self.get_serializer(data=queryset, many=True)
        serializer.is_valid()
        return Response(serializer.data, status=status.HTTP_200_OK)

    @swagger_auto_schema(tags=["Cart"], operation_summary="Добавить товар в корзину")
    @action(detail=False, methods=["post"])
    def add_to_cart(self, request: Request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.validated_data["user"] = self.request.user
        print(serializer.validated_data)
        serializer.create(serializer.validated_data)
        return Response(status=status.HTTP_204_NO_CONTENT)

    @swagger_auto_schema(tags=["Cart"], operation_summary='Изменить товар в корзине')
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
            return Response({"error": "Такого товара нет в корзине"}, status=status.HTTP_404_NOT_FOUND)


class FavoriteProductViewSet(GenericViewSet):
    serializer_class = FavoriteProductSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = FavoriteProduct.objects.filter(user=self.request.user)
        return queryset

    @swagger_auto_schema(tags=["Favorite"], operation_summary="Получить избранные товары")
    @action(detail=False, methods=["get"])
    def get(self, request: Request):
        queryset = self.get_queryset()
        return Response(queryset, status=status.HTTP_200_OK)

    @swagger_auto_schema(tags=["Favorite"], operation_summary="Добавить товар в избранное")
    def post(self, request: Request, product_id: int):
        product = Product.objects.filter(id=product_id).first()
        user = self.request.user
        if FavoriteProduct.objects.filter(user=self.request.user,
                                          product=Product.objects.filter(id=product_id).first()).first():
            return Response({"error": "Товар уже в избранных"}, status=status.HTTP_400_BAD_REQUEST)

        if product:
            serializer = self.get_serializer(data={"product": model_to_dict(product)})
            serializer.is_valid(raise_exception=True)
            serializer.validated_data["user"] = user
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Такого товара не существует"}, status=status.HTTP_404_NOT_FOUND)

    @swagger_auto_schema(tags=["Favorite"], operation_summary="Удалить товар из избранного")
    def delete(self, request: Request, id):
        instance = FavoriteProduct.objects.filter(id=id).first()
        if instance:
            instance.delete()
            return Response(status=status.HTTP_200_OK)
        else:
            return Response({"error": "Избранного товара с таким ID нет"}, status=status.HTTP_404_NOT_FOUND)

