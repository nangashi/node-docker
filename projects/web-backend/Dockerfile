FROM node:12.8.1-alpine AS build

WORKDIR /app

ADD . /app

RUN npm ci
RUN npm run build
