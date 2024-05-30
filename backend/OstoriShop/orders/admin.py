from django.contrib import admin
from orders.models.discount import Discount, UsedDiscount
from orders.models.orders import Order, OrderItem


@admin.register(Discount)
class DiscountAdmin(admin.ModelAdmin):
    pass


@admin.register(UsedDiscount)
class UsedDiscountAdmin(admin.ModelAdmin):
    pass


@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    pass


class OrderItemInline(admin.TabularInline):
    model = OrderItem
    verbose_name = "Товар в заказе"
    verbose_name_plural = "Товары в заказе"


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    fields = (
        "user", "discount", "total_price", "city", "street", "house_number", "apartment_number",
        "recipient",
        "postal_code", "idempotence_key", "payment_code", "is_paid", "status", "created_at")
    # fieldsets = (
    #     (
    #         "Основная информация",
    #         {"fields": ("user", "order_items", "discount", "total_price", "is_paid", "status", "created_at")}),
    # )
    inlines = [
        OrderItemInline
    ]
    readonly_fields = ("created_at",)
