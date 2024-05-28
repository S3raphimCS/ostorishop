from django.urls import path
from .views import HelpAPI, FeedbackAPI

app_name = "utils"

urlpatterns = [
    path('help/faq/', HelpAPI.as_view(), name='faq'),
    path('help/send_feedback/', FeedbackAPI.as_view(), name='send_feedback')
]
