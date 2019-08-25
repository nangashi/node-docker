FROM node:12.8.1-alpine AS build

WORKDIR /app

ARG http_proxy
ARG https_proxy
ENV http_proxy $http_proxy
ENV https_proxy $https_proxy

COPY package.json package-lock.json /app/
RUN npm ci

COPY src /app/src
RUN npm run build


FROM nginx:1.17.3-alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/

# run on normal user
RUN touch /var/run/nginx.pid && \
  chown -R nginx:nginx /var/run/nginx.pid && \
  chown -R nginx:nginx /var/cache/nginx
USER nginx

EXPOSE 80

VOLUME [ "/var/log/nginx" ]
