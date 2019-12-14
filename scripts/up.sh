#!/bin/bash

# common env
. $(dirname $0)/env.sh

export REDIS_HOST=redis

docker-compose -f docker-compose.yml -f docker-compose.build.yml build $@
docker-compose up -d $@
