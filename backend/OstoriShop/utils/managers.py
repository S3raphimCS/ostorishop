from django.core.cache import cache
from django.db.models import Manager

from utils.typing import SecondTo


class CachedManager(Manager):

    def all_cached(self, related_fields: list[str] = None, *, timeout: int = None):
        """Кеширует все записи из таблицы"""
        if timeout is None:
            timeout = SecondTo.ONE_HOUR * 24
        key = f'{self.model._meta.label_lower}.cache'
        queryset = cache.get(key)

        if queryset is not None:
            return queryset

        queryset = self.all()
        if related_fields:
            queryset = queryset.prefetch_related(*related_fields)

        cache.set(key, queryset, timeout=timeout)
        return queryset
