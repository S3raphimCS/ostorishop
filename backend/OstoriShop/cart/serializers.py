from django.core.exceptions import ValidationError
from rest_framework import serializers

from .models import CartProduct, FavoriteProduct
from shop.models import Product
from shop.serializers import ProductDetailSerializer
from authentication.serializers import CustomUserSerializer


class CartProductSerializer(serializers.ModelSerializer):
    # id = serializers.IntegerField()
    count = serializers.IntegerField()
    product = ProductDetailSerializer()

    # product_id = serializers.IntegerField(read_only=True)

    def create(self, validated_data: dict):
        product_id = validated_data.pop("product")["id"]
        old_object = CartProduct.objects.filter(product_id=product_id, user=validated_data["user"]).first()
        if old_object:
            old_object.count += validated_data["count"]
            old_object.save()
            return old_object
        validated_data["product"] = Product.objects.filter(id=product_id).first()
        cartProduct = CartProduct(**validated_data)
        cartProduct.save()
        return cartProduct

    def update(self, instance: CartProduct, validated_data: dict):
        instance.count = validated_data["count"]
        instance.save()
        print(instance)
        return instance

    def validate(self, attrs):
        data = super().validate(attrs)
        data["user"] = self.context["request"].user
        return data

    class Meta:
        model = CartProduct
        fields = ("id", "count", "product_id", "product")
        depth = 2


class FavoriteProductSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer(read_only=True)
    product = ProductDetailSerializer()

    def validate(self, attrs):
        data = super().validate(attrs)
        favoriteProduct = FavoriteProduct.objects.filter(id=attrs["product"]["id"]).first()
        product = Product.objects.filter(id=attrs["product"]["id"]).first().__dict__
        data["product"] = product
        return data

    def create(self, validated_data):
        product_id = validated_data.pop("product")["id"]
        validated_data["product"] = Product.objects.filter(id=product_id).first()
        favoriteProduct = FavoriteProduct(**validated_data)
        favoriteProduct.save()
        return favoriteProduct

    class Meta:
        model = FavoriteProduct
        fields = ("user", "product")
        depth = 1


class FavoriteProductListSerializer(serializers.ModelSerializer):
    # user = CustomUserSerializer()

    class Meta:
        model = FavoriteProduct
        fields = "__all__"
        depth = 1
