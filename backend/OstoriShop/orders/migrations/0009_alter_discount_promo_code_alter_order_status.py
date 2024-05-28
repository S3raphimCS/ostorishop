# Generated by Django 4.2.7 on 2024-05-22 14:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0008_order_total_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='discount',
            name='promo_code',
            field=models.CharField(max_length=40, unique=True, verbose_name='Промокод'),
        ),
        migrations.AlterField(
            model_name='order',
            name='status',
            field=models.CharField(choices=[('processing', 'В обработке'), ('delivery', 'Доставляется'), ('delivered', 'Доставлен')], default='В обработке', max_length=15, verbose_name='Статус заказа'),
        ),
    ]