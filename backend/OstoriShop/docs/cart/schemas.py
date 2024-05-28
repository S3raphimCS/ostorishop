from drf_yasg import openapi

from docs.utils.schemas import OpenAPISchema, int32_schema

cart_price_schema = OpenAPISchema(
    title="CartPrice", description="Стоимость товаров в корзине",
    type_=openapi.TYPE_OBJECT, properties={
        "total_price": int32_schema
    }
)

cart_item = OpenAPISchema(
    title="CartItem", description="Товар в корзине",
    type_=openapi.TYPE_OBJECT, properties={
        ""
    }
)
