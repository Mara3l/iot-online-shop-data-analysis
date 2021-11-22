# DATA

### Start docker container

```
$ docker-compose up
```

### Connect to docker postgres container

```
$ psql -h localhost -p 8081 -d docker -U docker --password
```

### IP Address

```
$ docker inspect iot-eshop-postgres -f "{{json .NetworkSettings.Networks }}"
```