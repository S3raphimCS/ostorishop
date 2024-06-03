from drf_yasg import openapi
from docs.utils.schemas import OpenAPISchema, string_schema, int32_schema, url_schema


discount_schema = OpenAPISchema(
    title="Promocode", type_=openapi.TYPE_OBJECT, properties={
        "promocode": string_schema,
    }
)

payment_create_schema = OpenAPISchema(
    title="PaymentCreate", description="Создание ссылки на оплату заказа",
    type_=openapi.TYPE_OBJECT, properties={
        "order_id": int32_schema,
        "return_url": url_schema
    }
)

