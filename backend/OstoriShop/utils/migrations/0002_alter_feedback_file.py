# Generated by Django 4.2.7 on 2024-05-11 12:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('utils', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feedback',
            name='file',
            field=models.FileField(blank=True, null=True, upload_to='feedback/', verbose_name='файл'),
        ),
    ]
