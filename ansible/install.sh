#!/bin/bash

export ANSIBLE_CONFIG=$(pwd)
ansible-playbook -i inventories/common.yml -i inventories/staging.yml playbooks/all.yml -e "@inventories/staging-private.yml" -v
