from django.urls import path
from cart import views

urlpatterns = [
    path('', views.FavoriteProductViewSet.as_view({"get": "get"}), name="favorite_products"),
    path('add/<int:product_id>', views.FavoriteProductViewSet.as_view({"post": "post"})),
    path('delete/<int:id>', views.FavoriteProductViewSet.as_view({"delete": "delete"}))
]
