from drf_yasg import openapi
from docs.utils.schemas import OpenAPISchema, string_schema


discount_schema = OpenAPISchema(
    title="Promocode", type_=openapi.TYPE_OBJECT, properties={
        "promocode": string_schema,
    }
)

