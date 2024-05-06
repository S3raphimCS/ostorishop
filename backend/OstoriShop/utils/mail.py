from email.mime.base import MIMEBase

from django.conf import settings
from django.core.mail import EmailMultiAlternatives

from utils.shortcuts import put_context_to_template


class Email(EmailMultiAlternatives):

    def __init__(self, subject: str = None, body: str = None,
                 to: list[str] | tuple[str] = None, from_email: str = None,
                 bcc: list[str] | tuple[str] = None, cc: list[str] | tuple[str] = None,
                 reply_to: list[str] | tuple[str] = None, headers: dict = None,
                 attachments: list[MIMEBase] | list[tuple[str, str]] = None,
                 alternatives: list[tuple[str, str]] = None, connection=None, *,
                 template: str = None, context: dict = None
                 ):
        if not to:
            to = [settings.EMAIL_HOST_USER]

        assert (template and context) or (not template and not context), \
            'Должны быть переданы оба параметра (template и context) или оба параметра должны отсутствовать'
        if template:
            body = put_context_to_template(template, context)

        super().__init__(subject, body, from_email, to, bcc, connection,
                         attachments, headers, alternatives, cc, reply_to)

    def send(self, fail_silently=False) -> int:
        """Обёртка над базовой send(). Для будущего расширения"""
        sent_num = super().send(fail_silently=fail_silently)
        return sent_num

    def set_html_alternative(self, html_template: str, context: dict[str]) -> None:
        """Добавляет альтернативу письма в HTML формате"""
        html_content = put_context_to_template(html_template, context)
        self.attach_alternative(html_content, 'text/html')
