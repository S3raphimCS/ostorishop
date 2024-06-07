from django.contrib.auth import get_user_model
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from django.utils.translation import gettext_lazy as _

from shop.models import Category

User = get_user_model()


class Discount(models.Model):
    title = models.CharField(
        _("Название"),
        max_length=256
    )
    discount_amount = models.IntegerField(
        _("Размер скидки"),
        validators=[MinValueValidator(1), MaxValueValidator(100)]
    )
    promocode = models.CharField(
        _("Промокод"),
        max_length=40,
        unique=True
    )
    product_categories = models.ManyToManyField(
        Category,
        verbose_name=_("Категории товаров"),
        related_name="discount_categories",
        blank=True
    )
    date_of_end = models.DateTimeField(
        _("Конец работы промокода"),
    )

    class Meta:
        verbose_name = "Промокод"
        verbose_name_plural = "Промокоды"

    def __str__(self):
        return f"{self.title} - {self.promocode}"


# Пока не используется
class UsedDiscount(models.Model):
    discount = models.ForeignKey(
        Discount,
        on_delete=models.SET,
        verbose_name=_("Промокод")
    )
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        verbose_name=_("Пользователь")
    )

    class Meta:
        verbose_name = "Использованный промокод"
        verbose_name_plural = "Использованные промокоды"

    def __str__(self):
        return f"{self.discount.title} пользователя {self.user.email}"
