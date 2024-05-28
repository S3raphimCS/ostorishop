from typing import Mapping

from rest_framework import serializers


class DynamicFieldsMixin:
    field_filter_name = 'fields'
    exclude_filter_name = 'excluded_fields'

    def get_fields(self):
        fields = super().get_fields()

        if not isinstance(self.context, Mapping):
            return fields

        requested_fields = self.context.get(self.field_filter_name, [])
        excluded_fields = self.context.get(self.exclude_filter_name, [])
        if requested_fields:
            requested_fields.append('id')
            fields = {field_name: field for field_name, field in fields.items()
                      if field_name in requested_fields and field_name not in excluded_fields}
        return fields


class DynamicFieldsSerializer(DynamicFieldsMixin, serializers.Serializer):
    pass


class DynamicFieldsModelSerializer(DynamicFieldsMixin, serializers.ModelSerializer):
    pass
