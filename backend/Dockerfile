FROM python:3.10-alpine3.16

LABEL MAINTAINER: Andrew Medvedev hydra1337channel@gmail.com

ENV PYTHONUNBUFFERED=1
COPY /requirements.txt /requirements.txt

RUN apk update
RUN apk add gcc

RUN pip install --upgrade pip && \
    pip install -r /requirements.txt

COPY OstoriShop/ /api
WORKDIR /api

RUN adduser --disabled-password --no-create-home django
USER django

COPY ./entrypoint.sh / 
ENTRYPOINT [ "sh", "/entrypoint.sh" ]
