from django.urls import path
from orders import views


urlpatterns = [
    path("", views.OrderViewSet.as_view({"get": "get", "post": "post"})),
    path("discount/", views.OrderViewSet.as_view({"post": "check_discount"})),
    path("<int:id>", views.OrderViewSet.as_view({"get": "get_order"}), name="get_order"),
    path("payment/", views.OrderViewSet.as_view({'post': "payment"}))
]
