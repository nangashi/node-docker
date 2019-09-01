
# インストール

## WSL

https://qiita.com/Aruneko/items/c79810b0b015bebf30bb

Ubuntu 18.0.x LTS をインストールする。

## Ubuntu

```sh
sudo apt-get update -y
sudo apt-get upgrade
```

## Docker for Windows




## bash設定

~/.bashrc に以下の設定を追加する。

```sh
# connect to docker for windows
export DOCKER_HOST=tcp://localhost:2375

# path for docker-compose
export PATH=$PATH:/usr/local/bin

# solution for docker-compose volumes problem
# https://github.com/docker/for-win/issues/371
if [ ! -d "/c" ] || [ ! "$(ls -A /c)" ]; then
  echo "Requiring root password to $(tput setaf 6)mount --bind /mnt/c /c$(tput sgr 0)"
  sudo mkdir -p /c
  sudo mount --bind /mnt/c /c
fi
if [ "$(pwd | cut -c -7)" == "/mnt/c/" ]; then
  cd "$(pwd | cut -c 5-)"
fi
```
