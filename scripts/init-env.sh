#!/bin/bash

# common env
. $(dirname $0)/env.sh

if ! (docker network ls | tail -n +2 | awk '{print $2}' | grep -q ${DOCKER_COMMON_NETWORK}); then
  docker network create --driver bridge ${DOCKER_COMMON_NETWORK}
fi
