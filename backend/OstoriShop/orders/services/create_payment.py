from decimal import Decimal

from django.conf import settings
from requests.exceptions import HTTPError
from rest_framework import status
from yookassa import Configuration, Payment

from orders.models.orders import Order


def get_or_create_payment(validated_data, idempotence_key, return_url):
    Configuration.account_id = settings.YOOKASSA_ACCOUNT_ID
    Configuration.secret_key = settings.YOOKASSA_SECRET_KEY
    price = Decimal(validated_data["total_price"])
    code = Order.objects.get(id=validated_data["id"]).payment_code

    try:
        payment = Payment.find_one(str(code))
        match payment.status:
            case "canceled":
                return {"detail": "Ваш заказ отменен", "code": 400}, status.HTTP_400_BAD_REQUEST
            case "succeeded":
                return {"detail": "Ваш заказ уже оплачен", "code": 400}, status.HTTP_400_BAD_REQUEST
    except HTTPError:

        payment = Payment.create({
            "amount": {
                "value": price + price * Decimal(0.035),
                "currency": "RUB"
            },
            "confirmation": {
                "type": "redirect",
                "return_url": return_url
            },
            "capture": True,
            "description": f"Заказ №{validated_data['id']}"
        }, idempotence_key)
        order = Order.objects.get(id=validated_data["id"])
        order.payment_code = payment.id
        order.save()

    return payment.confirmation["confirmation_url"]
