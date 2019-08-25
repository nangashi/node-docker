FROM mysql:8.0

ADD config/mysql.cnf /etc/mysql/conf.d/mysql.cnf

RUN chmod 664 /etc/mysql/conf.d/mysql.cnf
RUN mkdir /var/log/mysql
