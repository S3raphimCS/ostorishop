from rest_framework import serializers

from .models import CartProduct, FavoriteProduct
from authentication.serializers import CustomUserSerializer


class CartProductSerializer(serializers.Serializer):
    class Meta:
        model = CartProduct
        fields = ("id", "count", "product")
        depth = 1


class CartProductListSerializer(serializers.ModelSerializer):
    # user = CustomUserSerializer()

    class Meta:
        model = CartProduct
        fields = ("id", "count", "product")
        depth = 1


class FavoriteProductListSerializer(serializers.ModelSerializer):
    # user = CustomUserSerializer()

    class Meta:
        model = FavoriteProduct
        fields = "__all__"
        depth = 1
