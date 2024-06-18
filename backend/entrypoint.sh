#!/bin/sh

# echo "Waiting for postgres..."

# while ! nc -z db 5432; do
#   sleep 0.1
# done

# echo "PostgreSQL started"

# python wait_for_postgres.py
python manage.py migrate
python manage.py collectstatic --no-input

daphne config.asgi:application --port 8000 -b 0.0.0.0