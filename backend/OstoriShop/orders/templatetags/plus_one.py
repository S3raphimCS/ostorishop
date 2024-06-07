from django import template

register = template.Library()


@register.filter
def plus_one(number):
    return number + 1
