from django.contrib import admin
from .models import Category, Product, ProductComment


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    fieldsets = (
        ("Основная информация", {"fields": ('name', 'icon')}),
    )
    list_display = ("name",)
    list_per_page = 15
    search_fields = ("name",)
    ordering = ("name",)


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    fieldsets = (
        ("Основная информация", {"fields": ('name', 'categories', 'price', 'quantity', 'description', 'article')}),
        ("Физические показатели", {"fields": ('weight', 'volume')}),
    )
    list_filter = ('categories',)
    list_display = ("name", 'article', 'price', 'quantity', 'get_categories')
    list_per_page = 15
    search_fields = ("name", 'article', 'description')
    ordering = ("name", 'price', 'quantity')


@admin.register(ProductComment)
class ProductCommentAdmin(admin.ModelAdmin):
    fieldsets = (
        ("Пользователь и товар", {"fields": ('user', 'product_name')}),
        ("Отзыв", {"fields": ('rating', "message")}),
        ("Модерирование", {"fields": ('is_moderated',)}),
    )
    list_filter = ("rating", "is_moderated",)
    list_display = ('is_moderated', 'product_name', 'rating', 'user')
    list_per_page = 15
    search_fields = ("product_name", "user",)
    ordering = ("rating",)
