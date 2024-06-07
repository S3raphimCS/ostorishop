from django.conf import settings
from django.contrib.auth import get_user_model
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.core.exceptions import ValidationError as DjangoValidationError
from django.utils.http import urlsafe_base64_decode
from drf_yasg.utils import swagger_auto_schema
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.exceptions import NotFound
from rest_framework.generics import GenericAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import GenericViewSet
from rest_framework_simplejwt.views import \
    TokenRefreshView as JWTTokenRefreshView

from authentication.permissions import IsNotAuthenticated
from authentication.serializers.auth import (EmailVerifySerializer,
                                             PasswordChangeSerializer,
                                             PasswordForgotEmailSerializer,
                                             TokenObtainPairSerializer,
                                             TokenRefreshSerializer,
                                             UserRegisterSerializer)
from authentication.serializers.user import CustomUserSerializer
from docs.authentication.descriptions import (
    EMAIL_VERIFY_POST_DESC, LOGIN_POST_DESC, LOGOUT_GET_DESC,
    PASSWORD_CHANGE_PUT_DESC, PASSWORD_FORGOT_CONFIRM_POST_DESC,
    PASSWORD_FORGOT_SEND_POST_DESC, REGISTER_POST_DESC, TOKEN_REFRESH_DESC)
from docs.authentication.schemas import (email_verify_schema,
                                         password_forgot_schema, user_schema)
from docs.utils.schemas import error_list_schema, error_schema
from utils.shortcuts import if_sent

User = get_user_model()


class TokenRefreshAPI(JWTTokenRefreshView):
    serializer_class = TokenRefreshSerializer

    @swagger_auto_schema(tags=["Auth"], responses={
        status.HTTP_200_OK: TokenRefreshSerializer,
        status.HTTP_401_UNAUTHORIZED: error_schema
    }, operation_summary="Обновить токен", operation_description=TOKEN_REFRESH_DESC)
    def post(self, request: Request, *args, **kwargs):
        return super().post(request, *args, **kwargs)


class RegisterAPI(GenericAPIView):
    serializer_class = UserRegisterSerializer
    permission_classes = [IsNotAuthenticated]

    @swagger_auto_schema(tags=["Auth"], operation_description=REGISTER_POST_DESC, responses={
        status.HTTP_201_CREATED: user_schema,
        status.HTTP_400_BAD_REQUEST: error_list_schema
    }, operation_summary="Регистрация пользователя")
    def post(self, request: Request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.create(serializer.validated_data)
        serializer = CustomUserSerializer(user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class LoginAPI(GenericAPIView):
    serializer_class = TokenObtainPairSerializer
    permission_classes = [IsNotAuthenticated]

    @swagger_auto_schema(tags=["Auth"], operation_summary="Войти", responses={
        status.HTTP_200_OK: TokenRefreshSerializer,
        status.HTTP_401_UNAUTHORIZED: error_schema,
        status.HTTP_403_FORBIDDEN: error_schema
    }, operation_description=LOGIN_POST_DESC)
    def post(self, request: Request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        response = Response(serializer.validated_data, status=status.HTTP_200_OK)
        response.set_cookie(
            settings.SIMPLE_JWT["TOKEN_NAME"], serializer.validated_data["access"], samesite="lax"
        )
        return response


class LogoutAPI(APIView):
    @swagger_auto_schema(tags=["Auth"], operation_description=LOGOUT_GET_DESC, operation_summary="Выход с аккаунта")
    def get(self, request: Request):
        response = Response()
        response.delete_cookie(settings.SIMPLE_JWT['TOKEN_NAME'])
        return response


class PasswordChangeAPI(GenericAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = PasswordChangeSerializer

    @swagger_auto_schema(tags=["Auth"], operation_description=PASSWORD_CHANGE_PUT_DESC, responses={
        status.HTTP_204_NO_CONTENT: "",
        status.HTTP_400_BAD_REQUEST: error_list_schema,
        status.HTTP_401_UNAUTHORIZED: error_schema
    }, operation_summary="Сменить пароль")
    def put(self, request: Request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.update(request.user, serializer.validated_data)
        return Response({}, status.HTTP_204_NO_CONTENT)


class PasswordForgotViewSet(GenericViewSet):
    permission_classes = [AllowAny]
    queryset = User.objects.none()

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._token_generator = PasswordResetTokenGenerator()
        self.email_template = "mailing/password_forgot.txt"

    def get_serializer_context(self):
        context = super().get_serializer_context()
        if self.action == "forgot_confirm":
            context["forgot_fields"] = ["new_password1", "new_password2"]
        return context

    def get_serializer_class(self):
        return PasswordChangeSerializer

    @swagger_auto_schema(tags=["Auth"], request_body=PasswordForgotEmailSerializer,
                         operation_description=PASSWORD_FORGOT_SEND_POST_DESC, responses={
            status.HTTP_204_NO_CONTENT: "",
            status.HTTP_400_BAD_REQUEST: error_schema,
            status.HTTP_404_NOT_FOUND: error_schema
        }, operation_summary="Отправить ссылку на восстановления на email")
    @action(detail=False, methods=["post"])
    def send_link_to_email(self, request: Request):
        serializer = PasswordForgotEmailSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        sent_count = serializer.send_mail("Восстановление пароля", self.email_template, serializer.validated_data,
                                          self._token_generator, None)
        return if_sent(sent_count, success_message="Ссылка отправлена", error_message="Не удалось отправить ссылку")

    @swagger_auto_schema(tags=["Auth"], request_body=password_forgot_schema,
                         operation_description=PASSWORD_FORGOT_CONFIRM_POST_DESC,
                         responses={status.HTTP_204_NO_CONTENT: "", status.HTTP_400_BAD_REQUEST: error_list_schema},
                         operation_summary="Восстановить пароль")
    @action(detail=False, methods=["post"])
    def forgot_confirm(self, request: Request, uidb64: str, token: str):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = self._get_user(uidb64)
        if not user or not self._token_generator.check_token(user, token):
            raise NotFound(f'Ссылка не валидна. Время действия - {settings.PASSWORD_RESET_TIMEOUT} c')

        serializer.update(user, serializer.validated_data)

        return Response("Пароль успешно изменен", status=status.HTTP_204_NO_CONTENT)

    @staticmethod
    def _get_user(uidb64: str):
        """Получение пользователя по его закодированному ID"""
        try:
            uid = urlsafe_base64_decode(uidb64).decode()
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist, DjangoValidationError):
            user = None
        return user


class EmailVerifyViewSet(GenericViewSet):
    permission_classes = [IsAuthenticated]

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._token_generator = PasswordResetTokenGenerator()
        self.email_template = "mailing/email_verify.txt"

    @swagger_auto_schema(tags=["Auth"], request_body=EmailVerifySerializer,
                         operation_description=EMAIL_VERIFY_POST_DESC,
                         responses={status.HTTP_204_NO_CONTENT: "", status.HTTP_400_BAD_REQUEST: error_schema,
                                    status.HTTP_404_NOT_FOUND: error_schema
                                    }, operation_summary="Отправить ссылку для подтверждения почты на email")
    @action(detail=False, methods=["post"])
    def send_link_to_email(self, request: Request):
        if request.user.is_email_verified:
            return Response("Почта уже подтверждена", status.HTTP_400_BAD_REQUEST)
        serializer = EmailVerifySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        sent_count = serializer.send_mail("Подтверждение почты", self.email_template, serializer.validated_data,
                                          self._token_generator, None)
        return if_sent(sent_count, success_message="Ссылка отправлена", error_message="Не удалось отправить ссылку")

    @swagger_auto_schema(tags=["Auth"], request_body=email_verify_schema, operation_description=EMAIL_VERIFY_POST_DESC,
                         responses={
                             status.HTTP_204_NO_CONTENT: "",
                             status.HTTP_400_BAD_REQUEST: error_list_schema
                         }, operation_summary="Подтверждение почты")
    @action(detail=False, methods=["post"])
    def email_verify(self, request: Request, uidb64: str, token: str):
        user = self._get_user(uidb64)
        if not user or not self._token_generator.check_token(user, token):
            raise NotFound(f"Ссылка не валидна. Время действия - {settings.PASSWORD_RESET_TIMEOUT} с")
        if user.is_email_verified:
            return Response("Почта уже подтверждена.", status=status.HTTP_400_BAD_REQUEST)

        user.is_email_verified =True
        user.save()
        return Response("Почта успешно подтверждена", status=status.HTTP_204_NO_CONTENT)

    @staticmethod
    def _get_user(uidb64: str):
        """Получение пользователя по его закодированному id"""
        try:
            uid = urlsafe_base64_decode(uidb64).decode()
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist, DjangoValidationError):
            user = None
        return user
