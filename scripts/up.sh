#!/bin/bash

docker-compose -f docker-compose.yml -f docker-compose.build.yml build
docker-compose up -d
