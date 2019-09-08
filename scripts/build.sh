#!/bin/bash

docker-compose -f docker-compose.yml -f docker-compose.build.yml build
mkdir -p ansible/roles/app/docker/files/images/
for image in hoge_web hoge_web-api hoge_redis; do
    docker save -o ansible/roles/app/docker/files/images/${image}.tar ${image}
done
