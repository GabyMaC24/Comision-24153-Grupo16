# Generated by Django 5.0.6 on 2024-07-08 17:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('delivery', '0002_helados_created'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Helados',
            new_name='Helado',
        ),
    ]
