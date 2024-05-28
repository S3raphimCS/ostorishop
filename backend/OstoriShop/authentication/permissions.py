from django.contrib.auth import get_user_model
from rest_framework.exceptions import PermissionDenied
from rest_framework.permissions import BasePermission as DRFBasePermission
from rest_framework.request import Request

User = get_user_model()


class BasePermission(DRFBasePermission):
    """От этого класса наследуются все Permission в проекте"""
    message = "У вас нет доступа"

    def handle_no_permission(self):
        raise PermissionDenied(detail=self.message)

    @staticmethod
    def is_authenticated(request: Request):
        """Пользователь авторизован"""
        return bool(request.user and request.user.is_authenticated)


class IsAuthenticatedAndOwner(BasePermission):
    """Авторизован и является владельцем объекта"""
    message = 'Вы можете смотреть и редактировать только свой профиль'

    def has_permission(self, request: Request, view) -> bool:
        return self.is_authenticated(request)

    def has_object_permission(self, request: Request, view, obj) -> bool:
        return bool(request.user.pk == obj.pk)


class IsNotAuthenticated(BasePermission):
    """Пользователь анонимный"""
    message = "Вы уже прошли авторизацию"

    def has_permission(self, request: Request, view):
        return bool(request.user.is_anonymous)
