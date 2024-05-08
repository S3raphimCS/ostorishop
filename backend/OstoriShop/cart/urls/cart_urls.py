from django.urls import path
from cart import views

urlpatterns = [
    path('', views.CartProductViewSet.as_view(
        {"get": "get", "post": "add_to_cart", "put": "update"}), name="cart_products"),
    path('total_price', views.CartProductViewSet.as_view({"get": "cart_total_price"})),
    path("delete/<int:id>", views.CartProductViewSet.as_view({"delete": "delete"})),
]
