# Generated by Django 4.2.7 on 2024-05-16 11:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0006_remove_product_image_productimage'),
    ]

    operations = [
        migrations.CreateModel(
            name='Size',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=5, verbose_name='Название размера')),
                ('size', models.CharField(max_length=12, verbose_name='Диапазон соответствующих размеров')),
            ],
        ),
        migrations.AddField(
            model_name='product',
            name='sizes',
            field=models.ManyToManyField(blank=True, related_name='sizes', related_query_name='sizes', to='shop.size', verbose_name='Размеры'),
        ),
    ]