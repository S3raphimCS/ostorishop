from django.template import loader

from rest_framework.response import Response
from rest_framework import status


def put_context_to_template(template_name: str, context: dict[str]) -> str:
    """Добавляет в шаблон переменные контекста"""
    content = loader.render_to_string(template_name, context)
    return content


def if_sent(sent_num: int, success_message: str = None, error_message: str = None) -> Response:
    """Возвращает ответ в зависимости от того отправлено ли письмо"""
    if not success_message:
        success_message = 'Запрос сохранён и отправлен'
    if not error_message:
        error_message = 'Запрос сохранён. При отправке возникла ошибка'

    if sent_num:
        return Response(success_message, status=status.HTTP_201_CREATED)
    else:
        return Response(error_message, status=status.HTTP_202_ACCEPTED)
