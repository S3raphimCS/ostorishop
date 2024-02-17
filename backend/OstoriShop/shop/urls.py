from django.urls import path
from shop import views


urlpatterns = [
    path('', views.ProductListView.as_view()),
    path('<slug:slug>/', views.ProductDetailView.as_view(), name='product'),
    path('search/', views.ProductListView.as_view()),
]
