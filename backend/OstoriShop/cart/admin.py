from django.contrib import admin
from .models import FavoriteProduct, CartProduct


@admin.register(FavoriteProduct)
class FavoriteProductAdmin(admin.ModelAdmin):
    fieldsets = (
        ("Пользователь", {"fields": ('user',)}),
        ("Товар", {"fields": ("product",)}),
    )
    list_display = ("user", "product")
    list_per_page = 15
    search_fields = ("user", "product")
    ordering = ("product",)


@admin.register(CartProduct)
class CartProductAdmin(admin.ModelAdmin):
    fieldsets = (
        ("Пользователь", {"fields": ('user',)}),
        ("Товар", {"fields": ("product", "color", "size", "count",)}),
    )
    list_display = ("user", "product", 'count')
    list_per_page = 15
    search_fields = ("user", "product")
    ordering = ("product",)

