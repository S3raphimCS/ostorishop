# Dockerfile
FROM certbot/certbot:latest

EXPOSE 6000 80

# читаем переменные среды из .env
ARG DOMAIN_EMAIL
ARG DOMAIN_URL

# устанавливаем переменные среды в переменные
ENV DOMAIN_EMAIL=$DOMAIN_EMAIL
ENV DOMAIN_URL=$DOMAIN_URL

WORKDIR /certbot
COPY . /certbot
WORKDIR /certbot

RUN apk update
RUN apk add certbot

# запускаем скрипт генерации
#CMD ["sh", "/generate-certificate.sh"]