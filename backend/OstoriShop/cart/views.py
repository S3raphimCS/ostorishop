from .models import FavoriteProduct, CartProduct
from rest_framework import generics
from .serializers import FavoriteProductListSerializer, CartProductListSerializer, CartProductSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.db.models import Sum
from rest_framework import status
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from rest_framework.viewsets import GenericViewSet
from rest_framework.decorators import action


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def product_total_price(request):
    products = CartProduct.objects.filter(user=request.user)
    if products:
        return Response({
            "total_price": products.aggregate(Sum("product__price"))["product__price__sum"],
        })
    else:
        return Response({
            "total_price": 0,
        })


class CartProductViewSet(GenericViewSet):
    serializer_class = CartProductSerializer


class CartProductListView(generics.ListAPIView):
    # queryset = CartProduct.objects.all()
    serializer_class = CartProductListSerializer

    def get_queryset(self):
        queryset = CartProduct.objects.filter(user=self.request.user)
        return queryset


class CartProductDeleteView(generics.DestroyAPIView):
    # queryset = CartProduct.objects.all()
    serializer_class = CartProductListSerializer
    lookup_field = 'id'

    def get_queryset(self):
        queryset = CartProduct.objects.filter(id=self.kwargs["id"])
        return queryset


class CartProductUpdateView(generics.UpdateAPIView):
    pass


class FavoriteProductListView(generics.ListAPIView):
    # queryset = FavoriteProduct.objects.all()
    serializer_class = FavoriteProductListSerializer

    def get_queryset(self):
        queryset = FavoriteProduct.objects.filter(id=self.kwargs["id"])
        return queryset


class FavoriteProductDeleteView(generics.DestroyAPIView):
    # queryset = CartProduct.objects.all()
    serializer_class = FavoriteProductListSerializer
    # lookup_field = 'id'

    def get_queryset(self):
        queryset = FavoriteProduct.objects.filter(id=self.kwargs["id"])
        return queryset


class FavoriteProductUpdateView(generics.UpdateAPIView):
    pass
