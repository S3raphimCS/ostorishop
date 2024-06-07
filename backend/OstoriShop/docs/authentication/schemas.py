from drf_yasg import openapi

from docs.utils.schemas import OpenAPISchema, email_schema, string_schema

user_schema = OpenAPISchema(
    title='UserRead', description='Пользователь',
    type_=openapi.TYPE_OBJECT, properties={
        'email': email_schema,
        'phone_number': string_schema,
        'last_name': string_schema,
        'first_name': string_schema,
    }
)

password_forgot_schema = OpenAPISchema(
    title="PasswordForgot", description="Забыли пароль",
    type_=openapi.TYPE_OBJECT, properties={
        "new_password1": string_schema,
        "new_password2": string_schema
    }
)

email_verify_schema = OpenAPISchema(
    title="EmailVerify", description="Подтверждение переданной почты",
    type_=openapi.TYPE_OBJECT, properties={
        "email": string_schema
    }
)
