from django.conf import settings
from rest_framework.request import Request
from rest_framework_simplejwt.authentication import JWTAuthentication


class JWTCookieAuthentication(JWTAuthentication):
    def authenticate(self, request: Request):
        """Аутентифицирует пользователя. Возвращает User и сам токен пользователя"""
        token = self.get_cookie(request)
        if not token:
            return None

        validated_token = self.get_validated_token(token)
        return self.get_user(validated_token), validated_token

    @staticmethod
    def get_cookie(request):
        """Извлекает из куки JWT token"""
        token_cookie = request.COOKIES.get(settings.SIMPLE_JWT['TOKEN_NAME'])
        return token_cookie
