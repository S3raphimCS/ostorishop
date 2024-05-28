from rest_framework import serializers

from orders.models.orders import Order
from orders.models.discount import Discount
from authentication.serializers.user import CustomUserSerializer
from cart.serializers import CartProductSerializer
from shop.serializers import CategoryListSerializer
from uuid import uuid4


class DiscountSerializer(serializers.ModelSerializer):
    title = serializers.CharField(read_only=True)
    discount_amount = serializers.IntegerField(read_only=True)
    promocode = serializers.CharField(required=True)
    product_categories = CategoryListSerializer(read_only=True)

    class Meta:
        model = Discount
        fields = ("title", "discount_amount", "promocode", "product_categories")


class OrderSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    # user = CustomUserSerializer(read_only=True)
    order_items = CartProductSerializer(many=True)
    created_at = serializers.DateTimeField(read_only=True)
    is_paid = serializers.BooleanField(read_only=True)
    discount = DiscountSerializer(required=False)
    status = serializers.CharField(read_only=True)
    total_price = serializers.DecimalField(read_only=True, max_digits=11, decimal_places=2)
    city = serializers.CharField()
    street = serializers.CharField()
    house_number = serializers.IntegerField()
    apartment_number = serializers.IntegerField()
    recipient = serializers.CharField()
    postal_code = serializers.IntegerField()

    def validate(self, attrs):
        data = super().validate(attrs)
        data["user"] = self.context["request"].user
        return data

    def create(self, validated_data):
        user = self.validated_data["user"]
        order_items = validated_data["order_items"]
        discount = validated_data["discount"] if "discount" in validated_data else None
        price = validated_data["price"]
        idempotence_key = uuid4()
        order = Order.objects.create(user=user, discount=discount, idempotence_key=idempotence_key, price=price)
        for product in order_items:
            product_id = product["id"]
            order.order_items.add(product_id)
        return order

    class Meta:
        model = Order
        fields = ("id", "order_items", "is_paid", "discount", "status", "total_price", "city", "street", "house_number",
                  "apartment_number", "recipient", "postal_code", "created_at")
