#!/bin/bash

# system config
export SYSTEM_NAME=system1

# docker config
export DOCKER_COMMON_NETWORK=common_network

# ansible config
export ANSIBLE_DOCKER_ROLE_DIR=ansible/roles/app/docker
export ANSIBLE_DOCKER_IMAGE_DIR=${ANSIBLE_DOCKER_ROLE_DIR}/files/images
export ANSIBLE_DOCKER_TEMPLATE_DIR=${ANSIBLE_DOCKER_ROLE_DIR}/templates
