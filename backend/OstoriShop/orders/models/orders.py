from django.db import models
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _
from cart.models import CartProduct
from orders.models.discount import Discount
from shop.models import Product, Size, Color
from django.core.validators import MinValueValidator

User = get_user_model()


class Order(models.Model):
    PENDING = "pending"
    CANCELED = "canceled"
    PROCESSING = "processing"
    IN_DELIVERY = "delivery"
    DELIVERED = 'delivered'

    STATUS_CHOICES = (
        (CANCELED, "Отменен"),
        (PENDING, "Ожидает оплаты"),
        (PROCESSING, "В обработке"),
        (IN_DELIVERY, "Доставляется"),
        (DELIVERED, "Доставлен")
    )

    user = models.ForeignKey(
        User,
        verbose_name=_("Пользователь"),
        on_delete=models.CASCADE
    )
    # order_items = models.ManyToManyField(
    #     CartProduct,
    #     verbose_name=_("Товары")
    # )
    created_at = models.DateTimeField(
        _("Создан"),
        auto_now_add=True,
    )
    is_paid = models.BooleanField(
        _("Оплачен"),
        default=False
    )
    discount = models.ForeignKey(
        Discount,
        verbose_name=_("Промокод"),
        on_delete=models.CASCADE,
        null=True, blank=True,
        default=None
    )
    status = models.CharField(
        _("Статус заказа"),
        max_length=15,
        choices=STATUS_CHOICES,
        default=PENDING
    )
    total_price = models.DecimalField(
        _("Стоимость"),
        default=0.00,
        decimal_places=2,
        max_digits=11
    )
    payment_code = models.UUIDField(
        _("Код платежа"),
        null=True
    )
    idempotence_key = models.UUIDField(
        _("Ключ идемпотентности"),
        unique=True
    )
    city = models.CharField(
        _("Город"),
        max_length=30,
        default="Хабаровск"
    )
    street = models.CharField(
        _("Улица"),
        max_length=50,
        default="Карла Маркса"
    )
    house_number = models.PositiveSmallIntegerField(
        _("Номер дома"),
        default=53
    )
    apartment_number = models.PositiveSmallIntegerField(
        _("Номер квартиры"),
        default=1
    )
    recipient = models.CharField(
        _("Получатель (ФИО)"),
        max_length=100,
        default="Иванов Иван Иванович"
    )
    postal_code = models.PositiveSmallIntegerField(
        _("Почтовый индекс"),
        default=680031
    )

    # @property
    # def total_price(self):
    #     print(self.CartProduct_set)
    #     return self.CartProduct_set.aggregate(
    #         total_price=Sum(F("count") * F("cartproduct_product__price"))
    #     )["total_price"] or Decimal(0)

    class Meta:
        verbose_name = "Заказ"
        verbose_name_plural = "Заказы"

    def __str__(self):
        return f"Заказ №{self.id} пользователя {self.user.email}"


class OrderItem(models.Model):
    order = models.ForeignKey(
        to=Order,
        on_delete=models.CASCADE,
        verbose_name=_("Заказ"),
        related_name="order_items",
        null=True
    )
    product = models.ForeignKey(
        to=Product,
        on_delete=models.CASCADE,
        verbose_name=_("Товар")
    )
    user = models.ForeignKey(
        to=User,
        on_delete=models.CASCADE,
        verbose_name=_("Пользователь"),
        related_name="order_items"
    )
    count = models.PositiveIntegerField(
        _("Количество"),
        blank=True,
        default=0,
        validators=[MinValueValidator(1)]
    )
    size = models.ForeignKey(
        to=Size,
        on_delete=models.CASCADE,
        verbose_name=_("Размер")
    )
    color = models.ForeignKey(
        to=Color,
        on_delete=models.CASCADE,
        verbose_name=_("Цвет"),
    )

    class Meta:
        verbose_name = _("Товар в заказе")
        verbose_name_plural = _("Товары в заказах")

    def __str__(self):
        return f"{self.product.name} в заказе №{self.order.id} пользователя {self.user.email}"
