# Generated by Django 5.0.3 on 2024-04-03 17:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='note',
            old_name='owner',
            new_name='author',
        ),
    ]
