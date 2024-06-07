from smtplib import SMTPException

from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import check_password, make_password
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError as DjangoValidationError
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode
from rest_framework import serializers
from rest_framework.exceptions import APIException, NotFound
from rest_framework_simplejwt.serializers import PasswordField
from rest_framework_simplejwt.serializers import \
    TokenObtainPairSerializer as JWTTokenObtainPairSerializer
from rest_framework_simplejwt.serializers import \
    TokenObtainSerializer as JWTTokenObtainSerializer
from rest_framework_simplejwt.serializers import \
    TokenRefreshSerializer as JWTTokenRefreshSerializer
from rest_framework_simplejwt.tokens import AccessToken

from utils.exceptions import ValidationError
from utils.mail import Email
from utils.serializers.generic import DynamicFieldsSerializer

User = get_user_model()


class UserRegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    password1 = serializers.CharField(min_length=8)
    password2 = serializers.CharField(min_length=8)
    first_name = serializers.CharField(required=False)
    last_name = serializers.CharField(required=False)

    def create(self, validated_data):
        email = validated_data["email"]
        password1 = validated_data["password1"]
        password2 = validated_data["password2"]
        first_name = validated_data["first_name"]
        last_name = validated_data["last_name"]

        self._validate_passwords(password1, password2)

        user = User.objects.create_user(
            email, password1, first_name=first_name, last_name=last_name
        )

        return user

    @staticmethod
    def _validate_passwords(password1, password2):
        if password1 != password2:
            return ValidationError("Пароли не совпадают")
        try:
            validate_password(password1)
        except DjangoValidationError as err:
            raise ValidationError(err.message)

    def update(self, instance, validated_data):
        raise NotImplementedError

    class Meta:
        model = User
        fields = ("last_name", "first_name", "email", "password1", "password2")


class TokenObtainSerializer(JWTTokenObtainSerializer):
    default_error_messages = {
        "no_active_account": "Не найдено аккаунта с введёнными данными. Логин или пароль неверны"
    }


class TokenObtainPairSerializer(JWTTokenObtainPairSerializer):
    default_error_messages = {
        "no_active_account": "Не найдено аккаунта с введёнными данными. Логин или пароль неверны"
    }

    def get_fields(self):
        fields = super().get_fields()
        fields[self.username_field] = serializers.EmailField()
        fields['password'] = PasswordField()
        return fields

    class Meta:
        ref_name = 'Token_Obtain_Pair'

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        add_token_payload(token, user)
        return token


class TokenRefreshSerializer(JWTTokenRefreshSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        refresh = self.get_token(self.get_user(data['access']))

        data["refresh"] = str(refresh)
        data["access"] = str(refresh.access_token)
        return data

    @classmethod
    def get_token(cls, user):
        token = cls.token_class.for_user(user)
        return token

    def get_user(self, token: str) -> User:
        access_token = AccessToken(token)
        user_id = access_token.get('user_id')
        user = User.objects.get(pk=user_id)
        return user

    class Meta:
        ref_name = "Token_Refresh"


class PasswordChangeSerializer(DynamicFieldsSerializer):
    old_password = PasswordField(label="Старый пароль")
    new_password1 = PasswordField(label="Новый пароль")
    new_password2 = PasswordField(label="Подтверждение пароль")

    field_filter_name = "forgot_fields"

    def validate(self, attrs):
        user = self.context['request'].user
        is_reset = bool(self.context.get('forgot_fields'))

        if not is_reset and not check_password(attrs['old_password'], user.password):
            raise ValidationError('Указан неверный старый пароль', code='old_password')

        if attrs['new_password1'] != attrs['new_password2']:
            raise ValidationError('Пароли не совпадают')

        try:
            validate_password(attrs['new_password1'])
        except DjangoValidationError as e:
            raise ValidationError(e.messages)

        return attrs

    def create(self, validated_data):
        pass

    def update(self, user, validated_data):
        user.password = make_password(validated_data['new_password1'])
        user.save()

    class Meta:
        fields = ['old_password', 'new_password1', 'new_password2']


class PasswordForgotEmailSerializer(serializers.Serializer):
    forgot_url = serializers.URLField(label='Базовая ссылка на frontend стороне',
                                      help_text='К ней добавляется /uid/token/ и отправляется пользователю в письме')
    to_email = serializers.EmailField(help_text='Email адрес к которому был привязан аккаунт')

    def send_mail(self, subject: str, email_template: str, validated_data: dict,
                  token_generator, from_email: str = None) -> int:
        to_email: str = validated_data.pop('to_email')
        forgot_url: str = validated_data.pop('forgot_url')

        user = self._get_user(to_email)
        uid = urlsafe_base64_encode(force_bytes(user.pk))
        token = token_generator.make_token(user)
        forgot_url = forgot_url.rstrip('/')
        absolute_url = f'{forgot_url}/{uid}/{token}/'

        context = {
            'email': to_email,
            'absolute_url': absolute_url,
            'user': user,
        }

        email_message = Email(subject, to=[to_email], from_email=from_email, template=email_template, context=context)
        try:
            sent_count = email_message.send()
        except SMTPException:
            raise APIException('Не удалось отправить email')

        return sent_count

    @staticmethod
    def _get_user(user_email: str) -> User:
        try:
            user = User.objects.get(email=user_email)
        except User.DoesNotExist:
            raise NotFound(f'Пользователя с {user_email} не существует')
        return user

    def create(self, validated_data):
        pass

    def update(self, instance, validated_data):
        pass

    class Meta:
        fields = ['to_email']


class EmailVerifySerializer(serializers.Serializer):
    confirm_url = serializers.URLField(label='Базовая ссылка на frontend стороне',
                                       help_text='К ней добавляется /uid/token/ и отправляется пользователю в письме')
    to_email = serializers.EmailField(help_text='Email адрес к которому привязан аккаунт')

    def send_mail(self, subject: str, email_template: str, validated_data: dict,
                  token_generator, from_email: str = None) -> int:
        to_email: str = validated_data.pop('to_email')
        confirm_url: str = validated_data.pop('confirm_url')

        user = self._get_user(to_email)
        uid = urlsafe_base64_encode(force_bytes(user.pk))
        token = token_generator.make_token(user)
        confirm_url = confirm_url.rstrip('/')
        absolute_url = f'{confirm_url}/{uid}/{token}/'

        context = {
            'email': to_email,
            'absolute_url': absolute_url,
            'user': user,
        }

        email_message = Email(subject, to=[to_email], from_email=from_email, template=email_template, context=context)
        try:
            sent_count = email_message.send()
        except SMTPException:
            raise APIException('Не удалось отправить email')

        return sent_count

    @staticmethod
    def _get_user(user_email: str) -> User:
        try:
            user = User.objects.get(email=user_email)
        except User.DoesNotExist:
            raise NotFound(f'Пользователя с {user_email} не существует')
        return user


def add_token_payload(token: dict, user) -> dict:
    """Функция для будущего развития содержания токена от информации пользователя"""
    return token
