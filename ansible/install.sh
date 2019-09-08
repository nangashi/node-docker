#!/bin/sh

ansible-playbook -i inventories/staging.yml playbooks/all.yml --extra-vars="@inventories/private.yml" -v
