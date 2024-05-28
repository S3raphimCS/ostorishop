from drf_yasg import openapi


class OpenAPISchema(openapi.Schema):
    def __init__(self, type_=None, **kwargs):
        super().__init__(type=type_, **kwargs)


string_schema = OpenAPISchema(type_=openapi.TYPE_STRING)
string_list_schema = OpenAPISchema(type_=openapi.TYPE_ARRAY, items=string_schema)
email_schema = OpenAPISchema(type_=openapi.TYPE_STRING, format=openapi.FORMAT_EMAIL)
url_schema = OpenAPISchema(type_=openapi.TYPE_STRING, format=openapi.FORMAT_URI)

number_schema = OpenAPISchema(type_=openapi.TYPE_NUMBER)
number_list_schema = OpenAPISchema(type_=openapi.TYPE_ARRAY, items=number_schema)
int32_schema = OpenAPISchema(type_=openapi.TYPE_NUMBER, format=openapi.FORMAT_INT32)
double_schema = OpenAPISchema(type_=openapi.TYPE_NUMBER, format=openapi.FORMAT_DOUBLE)
decimal_schema = OpenAPISchema(type_=openapi.TYPE_STRING, format=openapi.FORMAT_DECIMAL)

boolean_schema = OpenAPISchema(type_=openapi.TYPE_BOOLEAN)

date_schema = OpenAPISchema(type_=openapi.TYPE_STRING, format=openapi.FORMAT_DATE)
datetime_schema = OpenAPISchema(type_=openapi.TYPE_STRING, format=openapi.FORMAT_DATETIME)

error_schema = OpenAPISchema(
    title='Error', description='Одна ошибка',
    type_=openapi.TYPE_OBJECT, properties={
        'detail': string_schema,
        'code': string_schema
    },
    required=['detail']
)

error_list_schema = OpenAPISchema(
    title='ErrorList', description='Несколько ошибок',
    type_=openapi.TYPE_OBJECT, properties={
        'detail': string_list_schema
    },
    required=['detail']
)
