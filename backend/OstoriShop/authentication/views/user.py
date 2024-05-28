from string import ascii_letters, digits

from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin
from rest_framework.response import Response
from rest_framework.request import Request
from authentication.models import CustomUser
from authentication.serializers.user import CustomUserSerializer
from authentication.permissions import IsAuthenticatedAndOwner
from rest_framework.permissions import OR, IsAdminUser
from docs.authentication.descriptions import USER_GET_DESC, USER_PATCH_DESC, USER_DELETE_DESC
from docs.utils.schemas import error_schema, error_list_schema
from docs.authentication.schemas import user_schema


class CustomUserViewSet(UpdateModelMixin, DestroyModelMixin, RetrieveModelMixin, GenericViewSet):
    lookup_url_kwarg = "id"

    def get_serializer_class(self):
        return CustomUserSerializer

    def get_queryset(self):
        return CustomUser.objects.all()

    def get_permissions(self):
        permissions = [IsAuthenticatedAndOwner]
        if self.action == 'retrieve':
            return [OR(IsAuthenticatedAndOwner(), IsAdminUser())]
        return [permission() for permission in permissions]

    def check_object_permissions(self, request, obj):
        for permission in self.get_permissions():
            if not permission.has_object_permission(request, self, obj):
                message = getattr(permission, 'message', None)
                if isinstance(permission, OR):
                    message = getattr(permission.op2, 'message', None)
                self.permission_denied(
                    request,
                    message=message,
                    code=getattr(permission, 'code', None)
                )

    @swagger_auto_schema(tags=["User"], operation_description=USER_GET_DESC, responses={
        status.HTTP_200_OK: user_schema,
        status.HTTP_401_UNAUTHORIZED: error_schema,
        status.HTTP_403_FORBIDDEN: error_schema,
        status.HTTP_404_NOT_FOUND: error_schema,
    }, operation_summary="Получить информацию о пользователе")
    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)

    @swagger_auto_schema(tags=["User"], operation_description=USER_DELETE_DESC, responses={
        status.HTTP_400_BAD_REQUEST: error_list_schema,
        status.HTTP_401_UNAUTHORIZED: error_schema,
        status.HTTP_403_FORBIDDEN: error_schema,
        status.HTTP_404_NOT_FOUND: error_schema
    }, operation_summary="Частично обновить профиль пользователя")
    def partial_update(self, request, *args, **kwargs):
        return super().partial_update(request, *args, **kwargs)

    # TODO Подумать, нужно ли
    @swagger_auto_schema(tags=["User"], operation_summary="Изменить информацию о пользователе")
    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)

    @swagger_auto_schema(tags=["User"], operation_summary="Удалить пользователя")
    def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)
