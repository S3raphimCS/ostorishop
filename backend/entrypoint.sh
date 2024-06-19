#!/bin/sh

# echo "Waiting for postgres..."

# while ! nc -z db 5432; do
#   sleep 0.1
# done

# echo "PostgreSQL started"

python manage.py migrate
python manage.py collectstatic --noinput

daphne config.asgi:application --port 8000 -b 0.0.0.0