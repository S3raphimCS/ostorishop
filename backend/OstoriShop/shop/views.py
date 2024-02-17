from .serializers import ProductListSerializer, ProductDetailSerializer, CategoryListSerializer
from .models import Category, Product
from rest_framework.viewsets import generics


# TODO Сделать ViewSet
class ProductViewSet:
    pass


# TODO Переписать для сортировки и фильтрации
class ProductListView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductListSerializer


class ProductDetailView(generics.RetrieveAPIView):
    lookup_field = 'slug'
    queryset = Product.objects.all()
    serializer_class = ProductDetailSerializer


class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategoryListSerializer


