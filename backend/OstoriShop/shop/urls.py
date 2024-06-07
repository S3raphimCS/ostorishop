from django.urls import path

from shop import views

urlpatterns = [
    path('', views.ProductViewSet.as_view({"get": "list"}), name="product_list"),
    path('<slug:slug>/', views.ProductViewSet.as_view({"get": "product_by_slug"}), name='product_detail'),
]
