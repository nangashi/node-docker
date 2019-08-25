#!/bin/bash

# common env
. $(dirname $0)/env.sh

docker-compose up -d redis mysql
