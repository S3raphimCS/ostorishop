from django.core.exceptions import ValidationError
from rest_framework import serializers

from authentication.serializers.user import CustomUserSerializer
from shop.models import Product
from shop.serializers import ColorSerializer, ProductSerializer, SizeSerializer

from .models import CartProduct, Color, FavoriteProduct, Size


class CartProductSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)
    count = serializers.IntegerField(required=True)
    product = ProductSerializer(required=True)
    size = SizeSerializer(required=True)
    color = ColorSerializer(required=True)

    def create(self, validated_data: dict):
        product_id = validated_data.pop("product")["id"]
        old_object = CartProduct.objects.filter(product_id=product_id, user=validated_data["user"],
                                                color=validated_data["color"], size=validated_data["size"]).first()
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
        return instance

    def validate(self, attrs):
        data = super().validate(attrs)
        data["user"] = self.context["request"].user
        product = Product.objects.filter(id=attrs["product"]["id"]).first()
        if not product:
            raise ValidationError("Такого продукта не сущетсвует")
        color = Color.objects.filter(color=attrs["color"]["color"]).first()
        size = Size.objects.filter(title=attrs["size"]["title"]).first()
        if any([color not in product.colors, size not in product.sizes]):
            return ValidationError("Переданного цвета или размера нет в наличии")
        if color and size:
            data["color"] = color
            data["size"] = size
            return data
        raise ValidationError("Переданы неверные данные")

    class Meta:
        model = CartProduct
        fields = ("id", "count", "product_id", "product", "color", "size")
        depth = 2


class FavoriteProductSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer(read_only=True)
    product = ProductSerializer()

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

    class Meta:
        model = FavoriteProduct
        fields = "__all__"
        depth = 1
