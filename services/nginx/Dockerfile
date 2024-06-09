FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf

RUN mkdir -p /var/cache/nginx/client_temp /var/cache/nginx/proxy_temp /var/cache/nginx/fastcgi_temp /var/cache/nginx/uwsgi_temp /var/cache/nginx/scgi_temp \
    && chown -R nginx:nginx /var/cache/nginx

COPY nginx.conf /etc/nginx/nginx.conf

RUN mkdir -p /var/log/ostori_nginx \
    && chown -R nginx:nginx /var/log/ostori_nginx

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]

