#!/bin/bash

SYSTEM_NAME=portal
ANSIBLE_APP_DOCKER_ROLE_DIR=ansible/roles/app/docker
TAG=$(date +%Y%m%d)

# build and save images
docker-compose -f docker-compose.yml -f docker-compose.build.yml build
mkdir -p ${ANSIBLE_APP_DOCKER_ROLE_DIR}/files/images/
for image in $(docker images | awk '{ print $1 }' | grep -P "^${SYSTEM_NAME}_"); do
  echo docker tag ${image} ${image}:${TAG}
  docker tag ${image} ${image}:${TAG}
  docker save -o ${ANSIBLE_APP_DOCKER_ROLE_DIR}/files/images/${image}.tar ${image}:${TAG}
done
date +%Y%m%d > ${ANSIBLE_APP_DOCKER_ROLE_DIR}/files/images/tag

# copy docker-compose.yml
cp docker-compose.yml ${ANSIBLE_APP_DOCKER_ROLE_DIR}/templates/
