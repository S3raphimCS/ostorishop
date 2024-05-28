from rest_framework import serializers
from .models import Category, Product, ProductComment, ProductImage, Color, Size


class SizeSerializer(serializers.ModelSerializer):
    title = serializers.CharField()
    size = serializers.CharField(read_only=True)

    class Meta:
        model = Size
        fields = ("title", "size")


class ColorSerializer(serializers.ModelSerializer):
    color = serializers.CharField()
    icon = serializers.ImageField(read_only=True)

    class Meta:
        model = Color
        fields = ("color", "icon")


class ProductImageSerializer(serializers.ModelSerializer):
    image = serializers.CharField(read_only=True)

    class Meta:
        model = ProductImage
        fields = ("image",)


class ProductCommentSerializer(serializers.ModelSerializer):
    email = serializers.SerializerMethodField()
    message = serializers.CharField(read_only=True)

    class Meta:
        model = ProductComment
        fields = ("email", "message")

    def get_email(self, obj):
        return obj.user.email


class CategoryListSerializer(serializers.ModelSerializer):
    icon = serializers.CharField(read_only=True)
    name = serializers.CharField(read_only=True)
    slug = serializers.CharField(read_only=True)

    class Meta:
        model = Category
        fields = ("icon", "name", "slug")


class ProductSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField()
    name = serializers.CharField(read_only=True)
    images = serializers.StringRelatedField(many=True, read_only=True)
    description = serializers.CharField(read_only=True)
    comments = serializers.SerializerMethodField(read_only=True)
    categories = CategoryListSerializer(many=True, read_only=True)
    colors = ColorSerializer(many=True, read_only=True)
    sizes = SizeSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = (
            "id", "name", "images", "comments", "article", "description", "price", "quantity", "slug", "available",
            "categories",
            "colors", "sizes")
        depth = 1

    def get_comments(self, obj):
        qs = ProductComment.objects.filter(product_name_id=obj.id, is_moderated=True)
        serializer = ProductCommentSerializer(instance=qs, many=True)
        return serializer.data


class ProductListSerializer(serializers.ModelSerializer):
    image = serializers.CharField()

    class Meta:
        model = Product
        fields = "__all__"
        depth = 2
