FROM node:12.8.1-alpine AS build

WORKDIR /app

ARG http_proxy
ARG https_proxy
ENV http_proxy $http_proxy
ENV https_proxy $https_proxy

ADD . /app

RUN npm ci
RUN npm run build


FROM nginx:1.17.3-alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

VOLUME [ "/var/log/nginx" ]
