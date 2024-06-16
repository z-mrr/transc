#!/bin/bash
python manage.py makemigrations
# python manage.py makemigrations user_management
python manage.py migrate

if [ "$DJANGO_SUPERUSER_USERNAME" ]
then
    python manage.py createsuperuser \
        --noinput \
        --username $DJANGO_SUPERUSER_USERNAME \
        --email $DJANGO_SUPERUSER_EMAIL
fi
python manage.py runserver 0.0.0.0:8000