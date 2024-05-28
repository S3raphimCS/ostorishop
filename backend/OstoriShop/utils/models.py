from django.db import models
from django.urls import reverse
from .managers import CachedManager


class Feedback(models.Model):
    fio = models.CharField(max_length=300, verbose_name='ФИО')
    email = models.EmailField(verbose_name='email адрес')
    message = models.TextField(verbose_name='сообщение')
    file = models.FileField(upload_to="feedback/", blank=True, null=True, verbose_name='файл')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='отправлен')

    def get_absolute_url(self):
        app_label = self._meta.app_label
        model_name = self._meta.model_name
        admin_url = reverse(f'admin:{app_label}_{model_name}_change', args=[self.pk])
        return admin_url

    def __str__(self):
        return f'Отзыв от {self.email}'

    class Meta:
        db_table = 'feedback'
        verbose_name = 'обратная связь'
        verbose_name_plural = 'обратная связь'


class Help(models.Model):
    question = models.CharField(max_length=500, verbose_name='вопрос')
    answer = models.TextField(verbose_name='ответ')

    objects = CachedManager()

    def __str__(self):
        return self.question

    class Meta:
        db_table = 'help'
        verbose_name = 'FAQ'
        verbose_name_plural = 'FAQ'
