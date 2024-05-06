from django.urls import path
from cart import views


urlpatterns = [
    path('', views.CartProductListView.as_view(), name="cart_products"),
    path('favorite/', views.FavoriteProductListView.as_view(), name='favorite_products'),
    path('total_price/', views.product_total_price),
    path('delete_cart_product/<int:id>/', views.CartProductDeleteView.as_view()),
    path('delete_favorite_product/<int:id>/', views.FavoriteProductDeleteView.as_view()),
]
