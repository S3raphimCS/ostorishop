from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import get_user_model
from django_ckeditor_5.fields import CKEditor5Field
from slugify import slugify


class Category(models.Model):
    """Категория товара"""

    name = models.CharField(
        _("Название"),
        max_length=256
    )
    icon = models.ImageField(
        _("Иконка"),
        default="products/blank_category.png",
        upload_to="products/",
        blank=True, null=True
    )
    slug = models.SlugField(
        unique=True,
        blank=True, null=True
    )

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        return super(Category, self).save(*args, **kwargs)

    def __str__(self):
        return f'{self.name}'

    class Meta:
        verbose_name = _("Категория")
        verbose_name_plural = _("Категории")


class Product(models.Model):
    name = models.CharField(
        _("Наименование"),
        max_length=256
    )
    categories = models.ManyToManyField(
        Category,
        related_name="products",
        verbose_name=_("Категория"),
        blank=True,
        related_query_name='categories'
    )
    image = models.ImageField(
        _("Фотография"),
        default="products/blank_product.png",
        upload_to="products/",
        blank=True, null=True
    )
    article = models.CharField(
        _("Артикул"),
        max_length=127,
        blank=True
    )
    weight = models.FloatField(
        _("Вес в кг."),
        blank=True,
        default=0
    )
    volume = models.FloatField(
        _("Объем в см. куб."),
        blank=True,
        default=0
    )
    description = CKEditor5Field(
        _("Описание"),
        blank=True
    )
    price = models.DecimalField(
        _("Цена"),
        decimal_places=2, max_digits=16,
        default=0
    )
    quantity = models.IntegerField(
        _("Доступно"),
        blank=True,
        default=0
    )
    slug = models.SlugField(
        blank=True, null=True,
    )
    available = models.BooleanField(
        default=True,
    )

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        return super(Product, self).save(*args, **kwargs)

    def get_categories(self):
        return ', '.join([str(p.name) for p in self.categories.all()])

    def __str__(self):
        return f"{self.name}"

    class Meta:
        verbose_name = "Товар"
        verbose_name_plural = "Товары"


class ProductComment(models.Model):
    user = models.ForeignKey(
        get_user_model(),
        on_delete=models.CASCADE,
        related_name='comments',
        verbose_name=_("Пользователь")
    )
    product_name = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        related_name='comments',
        verbose_name=_("Товар")
    )
    message = models.TextField(
        _("Комментарий"),
    )
    is_moderated = models.BooleanField(
        _("Прошло модерацию"),
        default=False,
    )

    def __str__(self):
        return f"Отзыв пользователя {self.user} к товару {self.product_name}"

    class Meta:
        verbose_name = _("Отзыв пользователя к товару")
        verbose_name_plural = _("Отзывы пользователей к товарам")
