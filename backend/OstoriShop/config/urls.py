from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions
from rest_framework_simplejwt.views import (TokenObtainPairView,
                                            TokenRefreshView)
from .yasg import urlpatterns as docs_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('api/auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # path('auth/', include('djoser.urls')),
    # path('auth/', include('djoser.urls.jwt')),
    # path('auth/', include('djoser.urls.authtoken')),
    path("ckeditor5/", include('django_ckeditor_5.urls'), name="ck_editor_5_upload_file"),
    path('api/products/', include('shop.urls'), name='products'),
    path('api/cart/', include('cart.urls.cart_urls'), name='cart'),
    path('api/favorite/', include('cart.urls.favorite_urls'), name='favorite'),
    path('api/utils/', include('utils.urls'), name="utils"),
    path("api/auth/", include("authentication.urls"), name='auth'),
    path('api/order/', include("orders.urls"), name='orders')
]

urlpatterns += docs_urls

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
