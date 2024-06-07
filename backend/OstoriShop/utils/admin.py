from django.contrib import admin

from .models import Feedback, Help


@admin.register(Help)
class HelpAdmin(admin.ModelAdmin):
    pass


@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
    pass
