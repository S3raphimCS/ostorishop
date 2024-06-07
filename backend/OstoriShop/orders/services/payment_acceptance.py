from orders.models.orders import Order


def payment_acceptance(response):
    if response["type"] == "notification":
        object = response["object"]
        order = Order.objects.get(payment_code=object["id"])
        match response["event"]:
            case "payment.succeeded":
                order.status = Order.PROCESSING
                order.is_paid = True
            case "payment.canceled":
                order.status = Order.CANCELED
        order.save()
