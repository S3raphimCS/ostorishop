from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['email'] = user.email
        token['avatar'] = user.avatar.name
        token['first_name'] = user.first_name
        token['last_name'] = user.last_name

        return token

    class Meta:
        ref_name = "Token_obtain_pair"


class CustomUserSerializer(serializers.ModelSerializer):
    avatar = serializers.CharField(read_only=True)
    email = serializers.EmailField()
    is_email_verified = serializers.BooleanField()

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance

    class Meta:
        model = get_user_model()
        fields = ('id', 'email', 'first_name', 'last_name', 'avatar', 'is_email_verified')
