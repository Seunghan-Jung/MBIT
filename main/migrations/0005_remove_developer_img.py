# Generated by Django 3.1.5 on 2021-03-24 01:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_auto_20210323_1600'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='developer',
            name='img',
        ),
    ]
