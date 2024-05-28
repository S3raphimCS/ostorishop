from django.db import models
from shop.models import Product, Size, Color
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _
from django.core.validators import MinValueValidator

User = get_user_model()


class CartProduct(models.Model):
    """Товар в корзине"""

    product = models.ForeignKey(
        to=Product,
        on_delete=models.CASCADE,
        verbose_name=_("Товар"),
    )
    user = models.ForeignKey(
        to=User,
        on_delete=models.CASCADE,
        verbose_name=_("Пользователь"),
        related_name="cart_items",
    )
    count = models.PositiveIntegerField(
        _("Количество товара"),
        blank=True,
        default=0,
        validators=[MinValueValidator(0)],
    )
    size = models.ForeignKey(
        to=Size,
        on_delete=models.CASCADE,
        verbose_name=_("Размер"),
    )
    color = models.ForeignKey(
        to=Color,
        on_delete=models.CASCADE,
        verbose_name=_("Цвет"),
    )

    class Meta:
        verbose_name = _('Товар в корзине')
        verbose_name_plural = _('Товары в корзине')

    def __str__(self):
        return f'{self.user.full_name()} {self.product.name} {self.count} шт.'


class FavoriteProduct(models.Model):
    """Товар в избранном"""

    product = models.ForeignKey(
        to=Product,
        on_delete=models.CASCADE,
        verbose_name=_("Товар")
    )
    user = models.ForeignKey(
        to=get_user_model(),
        on_delete=models.CASCADE,
        verbose_name=_("Пользователь"),
        related_name="favorites",
    )

    class Meta:
        verbose_name = _("Избранный товар")
        verbose_name_plural = _("Избранные товары")

    def __str__(self):
        return f"{self.user.full_name()} {self.product.name}"



