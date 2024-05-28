from django.contrib import admin
from orders.models.discount import Discount, UsedDiscount
from orders.models.orders import Order


@admin.register(Discount)
class DiscountAdmin(admin.ModelAdmin):
    pass


@admin.register(UsedDiscount)
class UsedDiscountAdmin(admin.ModelAdmin):
    pass


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    fields = ("user", "order_items", "discount", "total_price", "is_paid", "status", "created_at")
    # fieldsets = (
    #     (
    #         "Основная информация",
    #         {"fields": ("user", "order_items", "discount", "total_price", "is_paid", "status", "created_at")}),
    # )
    readonly_fields = ("created_at",)
