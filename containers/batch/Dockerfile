FROM node:12.8.1-alpine AS modules

WORKDIR /app

ARG http_proxy
ARG https_proxy
ENV http_proxy $http_proxy
ENV https_proxy $https_proxy

ADD package.json yarn.lock /app/
RUN yarn --production


FROM node:12.8.1-alpine AS build

WORKDIR /app

ARG http_proxy
ARG https_proxy
ENV http_proxy $http_proxy
ENV https_proxy $https_proxy

COPY package.json yarn.lock /app/
RUN yarn

COPY webpack.config.js tsconfig.json /app/
COPY src /app/src
RUN yarn build:prod


FROM node:12.8.1-alpine

WORKDIR /app

COPY --from=build /app/dist/batch.js /app/
COPY --from=modules /app/node_modules /app/node_modules

CMD [ "node", "/app/batch.js" ]
