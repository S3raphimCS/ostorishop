from django.urls import path
from .views.user import CustomUserViewSet
from .views.auth import (LoginAPI, LogoutAPI, RegisterAPI, TokenRefreshAPI, PasswordChangeAPI, PasswordForgotViewSet,
                         EmailVerifyViewSet)

urlpatterns = [
    path('user/<int:id>', CustomUserViewSet.as_view({"get": "retrieve", "delete": "destroy", "put": "partial_update"})),
    path('user/login/', LoginAPI.as_view(), name="login"),
    path('user/logout/', LogoutAPI.as_view(), name="logout"),
    path('user/register', RegisterAPI.as_view(), name="register"),
    path('user/token/refresh', TokenRefreshAPI.as_view(), name='token-refresh'),

    path('password/change/', PasswordChangeAPI.as_view(), name='password_change'),
    path('password/forgot/email/', PasswordForgotViewSet.as_view({"post": "send_link_to_email"}),
         name='password_forgot'),
    path('password/forgot/<uidb64>/<token>/', PasswordForgotViewSet.as_view({'post': 'forgot_confirm'}),
         name='password_forgot_confirm'),
    path('email/verify/send/', EmailVerifyViewSet.as_view({"post": "send_link_to_email"}),
         name='send_email_verification'),
    path('email/verify/<uidb64>/<token>/', EmailVerifyViewSet.as_view({"post": "email_verify"}), name='verify_email'),

]
