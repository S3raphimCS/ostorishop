from smtplib import SMTPException

from rest_framework import serializers
from rest_framework.request import Request

from utils.mail import Email
from utils.models import Feedback, Help
from utils.shortcuts import build_absolute_url


class FeedbackSerializer(serializers.ModelSerializer):
    theme = serializers.CharField(max_length=50)

    def create_send_email(self, validated_data: dict, email_template: str, request: Request):
        """Создаёт запись в БД и отправляет уведомление администратору на email"""
        theme = validated_data.pop('theme')
        feedback = self.create(validated_data)

        absolute_url = build_absolute_url(request, feedback)
        if feedback.file:
            file_absolute_url = build_absolute_url(request, feedback.file.url)
        else:
            file_absolute_url = None
        context = {
            'theme': theme,
            'feedback': feedback,
            'file_absolute_url': file_absolute_url,
            'absolute_url': absolute_url
        }

        sent_count = self._send_email(email_template, context)
        return sent_count

    @staticmethod
    def _send_email(email_template: str, context: dict[str]) -> int:
        email_message = Email('Новый отзыв', template=email_template, context=context)
        try:
            sent_count = email_message.send()
        except SMTPException as e:
            sent_count = 0
        return sent_count

    class Meta:
        model = Feedback
        fields = ['theme', 'fio', 'email', 'message', 'file']


class HelpSerializer(serializers.ModelSerializer):
    class Meta:
        model = Help
        fields = ['question', 'answer']