from django.db.models.signals import pre_save
from django.dispatch import receiver
from utils.mail import Email

from orders.models.orders import Order, OrderItem

ORDER_IS_PAID_MAIL_TEMPLATE = 'mailing/order_is_paid.txt'
NEW_ORDER_TO_ADMIN_MAIL_TEMPLATE = 'mailing/new_order_is_paid.txt'
ORDER_STATUS_CHANGE_MAIL_TEMPLATE = 'mailing/order_status_change.txt'


class ChangeOrderStatusListener:
    @classmethod
    def register(cls):
        pre_save.connect(cls.send_notifications, sender=Order)

    @staticmethod
    @receiver(pre_save, sender=Order)
    def send_notifications(sender, instance, **kwargs):
        if instance.id is None:
            return
        try:
            old_instance = sender.objects.get(id=instance.id)
        except sender.DoesNotExist:
            return

        if not old_instance.is_paid and instance.is_paid:
            order_items = OrderItem.objects.filter(order=instance)
            context = {
                "user_email": instance.user.email,
                "order_id": instance.id,
                "order_status": instance.get_status_display(),
                "items_count": range(len(order_items)),
                "order_items": [item.product.name for item in order_items],
                "order_items_sizes": [item.size.title for item in order_items],
                "order_items_colors": [item.color.color for item in order_items],
                "order_items_count": [item.count for item in order_items],
                "total_price": instance.total_price,
                "created_at": instance.created_at
            }
            Email("Оплата заказа", to=[instance.user.email], from_email=None, template=ORDER_IS_PAID_MAIL_TEMPLATE,
                  context=context).send()
            Email("Получен новый заказ", template=NEW_ORDER_TO_ADMIN_MAIL_TEMPLATE, context=context).send()
            return

        if instance.status != old_instance.status:
            context = {
                "order_id": instance.id,
                "old_order_status": old_instance.get_status_display(),
                "new_order_status": instance.get_status_display(),
            }
            Email("Изменение статуса заказа", to=[instance.user.email], from_email=None,
                  template=ORDER_STATUS_CHANGE_MAIL_TEMPLATE,
                  context=context).send()
            return
