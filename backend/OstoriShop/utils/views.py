from rest_framework.generics import GenericAPIView, ListAPIView
from utils.serializers.models import FeedbackSerializer, HelpSerializer
from .models import Help
from drf_yasg.utils import swagger_auto_schema
from rest_framework.request import Request
from rest_framework.parsers import MultiPartParser
from docs.utils.descriptions import FEEDBACK_POST_DESC, FAQ_GET_DESC
from rest_framework import status
from docs.utils.schemas import string_schema, error_list_schema
from utils.shortcuts import if_sent


class FeedbackAPI(GenericAPIView):
    serializer_class = FeedbackSerializer
    parser_classes = [MultiPartParser]

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.email_template = "mailing/feedback.txt"

    @swagger_auto_schema(tags=["Help"], operation_description=FEEDBACK_POST_DESC, responses={
        status.HTTP_201_CREATED: string_schema,
        status.HTTP_202_ACCEPTED: string_schema,
        status.HTTP_400_BAD_REQUEST: error_list_schema
    }, operation_summary="Оставить отзыв или отправить запрос при трудностях")
    def post(self, request: Request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        sent_count = serializer.create_send_email(serializer.validated_data, self.email_template, request)
        return if_sent(sent_count)


class HelpAPI(ListAPIView):
    serializer_class = HelpSerializer

    def get_queryset(self):
        return Help.objects.all_cached()

    @swagger_auto_schema(tags=['Help'], operation_summary='Часто задаваемые вопросы',
                         operation_description=FAQ_GET_DESC)
    def get(self, request: Request, *args, **kwargs):
        return super().list(request, *args, **kwargs)
