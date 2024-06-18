# Generated by Django 4.2.7 on 2024-05-28 12:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0013_order_idempotence_key'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='City',
            field=models.CharField(default='Хабаровск', max_length=30, verbose_name='Город'),
        ),
        migrations.AddField(
            model_name='order',
            name='apartment_number',
            field=models.IntegerField(default=1, verbose_name='Номер квартиры'),
        ),
        migrations.AddField(
            model_name='order',
            name='house_number',
            field=models.IntegerField(default=53, verbose_name='Номер дома'),
        ),
        migrations.AddField(
            model_name='order',
            name='postal_code',
            field=models.IntegerField(default=680031, verbose_name='Почтовый индекс'),
        ),
        migrations.AddField(
            model_name='order',
            name='recipient',
            field=models.CharField(default='Иванов Иван Иванович', max_length=100, verbose_name='Получатель (ФИО)'),
        ),
        migrations.AddField(
            model_name='order',
            name='street',
            field=models.CharField(default='Карла Маркса', max_length=50, verbose_name='Улица'),
        ),
    ]
