#!/bin/bash

APP_ROLE_DIR=ansible/roles/app/docker

# build and save images
docker-compose -f docker-compose.yml -f docker-compose.build.yml build
mkdir -p ${APP_ROLE_DIR}/files/images/
for image in hoge_web hoge_web-api hoge_redis; do
    docker save -o ${APP_ROLE_DIR}/files/images/${image}.tar ${image}
done

# copy docker-compose.yml
cp docker-compose.yml ${APP_ROLE_DIR}/templates/
