# Generated by Django 4.2.7 on 2024-05-08 07:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0003_alter_category_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='icon',
            field=models.ImageField(blank=True, default='products/blank_category.png', null=True, upload_to='products/', verbose_name='Иконка'),
        ),
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, default='products/blank_product.png', null=True, upload_to='products/', verbose_name='Фотография'),
        ),
    ]