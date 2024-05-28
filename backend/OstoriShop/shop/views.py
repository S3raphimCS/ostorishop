from .serializers import ProductSerializer, ProductListSerializer, ProductSerializer, CategoryListSerializer
from .models import Category, Product
from rest_framework.viewsets import GenericViewSet, generics
from drf_yasg.utils import swagger_auto_schema
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin
from rest_framework.decorators import action
from docs.utils.schemas import error_schema
from docs.shop.descriptions import PRODUCT_LIST_GET_DESC, PRODUCT_BY_SLUG_GET_DESC


# TODO Сделать пагинацию, фильтры, сортировку, поиск по полям
class ProductViewSet(ListModelMixin, RetrieveModelMixin, GenericViewSet):
    serializer_class = ProductSerializer
    # pagination_class =
    # filter_backends = []
    # ordering_fields = []
    # search_fields = ["name", "slug"]

    def get_queryset(self):
        queryset = Product.objects.all()
        return queryset

    @swagger_auto_schema(tags=["Product"], operation_description=PRODUCT_LIST_GET_DESC, responses={
        status.HTTP_200_OK: ProductSerializer,
        status.HTTP_400_BAD_REQUEST: error_schema
    }, operation_summary="Список товаров")
    def list(self, request: Request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    @swagger_auto_schema(tags=["Product"], operation_description=PRODUCT_BY_SLUG_GET_DESC, responses={
        status.HTTP_200_OK: ProductSerializer,
        status.HTTP_400_BAD_REQUEST: error_schema,
        status.HTTP_404_NOT_FOUND: error_schema
    }, operation_summary="Товар по слагу")
    @action(detail=False, methods=["get"])
    def product_by_slug(self, request: Request, slug: str, *args, **kwargs):
        product = Product.objects.filter(slug=slug).first()
        if product:
            serializer = self.get_serializer(instance=product)
            return Response(serializer.data, status=status.HTTP_200_OK)

        content = {
            "detail": "Товар не найден",
            "code": 404,
        }

        return Response(content, status=status.HTTP_404_NOT_FOUND)
