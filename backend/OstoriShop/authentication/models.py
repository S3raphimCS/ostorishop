from django.db import models
from django.contrib.auth.models import AbstractUser, UserManager
from django.contrib.auth.hashers import make_password
from django.utils.translation import gettext_lazy as _


class CustomUserManager(UserManager):
    def _create_user(self, email, password, **extra_fields):
        email = self.normalize_email(email)
        user = CustomUser(email=email, **extra_fields)
        user.password = make_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('first_name', 'СуперПользователь')
        extra_fields.setdefault('avatar', 'images/users/blank.jpg')
        assert extra_fields['is_staff']
        assert extra_fields['is_superuser']
        assert extra_fields['first_name']

        return self._create_user(email, password, **extra_fields)


class CustomUser(AbstractUser):
    username = None
    objects = CustomUserManager()
    avatar = models.ImageField(
        _("Аватар"),
        upload_to='images/users',
        blank=True, null=True,
        default='images/users/blank.jpg',
    )
    email = models.EmailField(
        _("Электронная почта"),
        blank=True, null=True,
        default=None,
        unique=True,
        error_messages={
            'unique': _("Указанный адрес уже занят."),
        }
    )
    is_email_verified = models.BooleanField(
        default=False,
        verbose_name="Подтверждение почты",
    )
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        if self.is_anonymous:
            return f"Анонимный пользователь {self.pk}"
        return self.full_name()

    def full_name(self):
        """Возвращает полное имя пользователя"""
        return f"{self.first_name} {self.last_name}"

    class Meta:
        verbose_name = "Пользователь"
        verbose_name_plural = "Пользователи"
