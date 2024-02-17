from rest_framework import serializers

from .models import CartProduct, FavoriteProduct


class CartProductListSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartProduct
        fields = "__all__"


class FavoriteProductListSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavoriteProduct
        fields = "__all__"

