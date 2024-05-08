from rest_framework import serializers
from .models import Category, Product, ProductComment


class ProductDetailSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField()
    name = serializers.CharField(read_only=True)

    class Meta:
        model = Product
        fields = "__all__"
        depth = 1

    # image = serializers.CharField()


class CategoryListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"

    icon = serializers.CharField()


class ProductListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"
        depth = 2

    image = serializers.CharField()



