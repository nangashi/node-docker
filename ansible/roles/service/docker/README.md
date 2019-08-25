## docker-compose version

docker-compose  
https://github.com/docker/compose/releases

## install preparation

Please download and place required packages to files directory.

### Dokcer

== HOW TO DOWNLOAD ==
```sh
yum -y install yum-utils epel-release
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
yumdownloader docker-ce python2-pip device-mapper-persistent-data lvm2
```
==> copy ./*.rpm files to "files/rpms" directory.

### docker-compose

== HOW TO DOWNLOAD ==
```sh
pip download -d src docker-compose
```
==> copy src/* files to "files/pips" directory.
