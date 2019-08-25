#!/bin/bash

# common env
. $(dirname $0)/env.sh

TAG="$(git log -n 1 --format=%cd --date=short | sed 's/-//g')-$(git rev-parse --abbrev-ref HEAD)-$(git log -n 1 --format=%h)"

# build and save images
docker-compose -f docker-compose.yml -f docker-compose.build.yml build
mkdir -p ${ANSIBLE_DOCKER_IMAGE_DIR}/
for image in $(docker-compose config | grep image: | awk '{print $2}'); do
  echo "Creating image: ${image}:${TAG}"
  imageHash="$(docker save ${image} | md5sum | cut -f1 -d' ')"
  imageFile=${ANSIBLE_DOCKER_IMAGE_DIR}/${image}.tar.bz2
  imageHashFile=${imageFile}.md5
  if [ "${imageHash}" != "$(cat ${imageHashFile} 2> /dev/null)" ]; then
    echo "Saving image ${image} to file."
    docker save ${image}:latest | bzip2 > ${imageFile}
    echo ${imageHash} > ${imageHashFile}
  fi
  docker tag ${image} ${image}:${TAG}
done
echo "${TAG}" > ${ANSIBLE_DOCKER_IMAGE_DIR}/tag

# copy docker-compose.yml
cp docker-compose.yml ${ANSIBLE_DOCKER_TEMPLATE_DIR}/
