FROM redis:5.0.5-alpine

ADD config/redis.conf /usr/local/etc/redis/redis.conf

RUN mkdir /var/log/redis && \
    chown redis:redis /var/log/redis

VOLUME [ "/data", "/var/log/redis" ]

CMD [ "redis-server", "/usr/local/etc/redis/redis.conf" ]
