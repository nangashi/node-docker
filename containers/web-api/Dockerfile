FROM node:12.8.1-alpine AS build

WORKDIR /app

ARG http_proxy
ARG https_proxy
ENV http_proxy $http_proxy
ENV https_proxy $https_proxy

ADD package.json yarn.lock /app/
RUN yarn

ADD . /app
RUN npx webpack


FROM node:12.8.1-alpine

WORKDIR /app

COPY --from=build /app/dist/server.js /app
COPY --from=build /app/node_modules /app/node_modules

EXPOSE 3000

CMD [ "node", "/app/server.js" ]
