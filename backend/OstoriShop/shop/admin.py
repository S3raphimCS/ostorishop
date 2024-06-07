from django.contrib import admin

from .models import (Category, Color, Product, ProductComment, ProductImage,
                     Size)


@admin.register(Color)
class ColorAdmin(admin.ModelAdmin):
    pass


@admin.register(Size)
class SizeAdmin(admin.ModelAdmin):
    pass


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    fieldsets = (
        ("Основная информация", {"fields": ('name', 'icon')}),
    )
    list_display = ("name",)
    list_per_page = 15
    search_fields = ("name",)
    ordering = ("name",)


class ProductImageInline(admin.TabularInline):
    model = ProductImage
    verbose_name = "Изображение"
    verbose_name_plural = "Изображения"


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    fieldsets = (
        ("Основная информация",
         {"fields": ('name', 'sizes', 'categories', 'colors', 'price', 'quantity', 'description', 'article', 'slug')}),
        ("Физические показатели", {"fields": ('weight', 'volume')}),
    )
    inlines = [
        ProductImageInline
    ]
    list_filter = ('categories',)
    list_display = ("name", 'article', 'price', 'quantity', 'get_categories', 'display_images_amount')
    list_per_page = 15
    search_fields = ("name", 'article', 'description')
    ordering = ("name", 'price', 'quantity')

    def display_images_amount(self, obj):
        return str(len(ProductImage.objects.filter(product=obj)))

    def get_categories(self, obj):
        return ', '.join([str(p.name) for p in obj.categories.all()])

    display_images_amount.short_description = "Кол-во картинок"
    get_categories.short_description = "Категории"


@admin.register(ProductComment)
class ProductCommentAdmin(admin.ModelAdmin):
    fieldsets = (
        ("Пользователь и товар", {"fields": ('user', 'product_name')}),
        ("Отзыв", {"fields": ("message",)}),
        ("Модерация", {"fields": ('is_moderated',)}),
    )
    list_filter = ("is_moderated",)
    list_display = ('is_moderated', 'product_name', 'user')
    list_per_page = 15
    search_fields = ("product_name", "user",)


@admin.register(ProductImage)
class ProductImageAdmin(admin.ModelAdmin):
    pass
