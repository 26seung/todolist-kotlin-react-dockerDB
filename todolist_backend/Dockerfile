FROM adoptopenjdk/openjdk11:alpine-jre

VOLUME /tmp
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} app.jar

EXPOSE 9020

ENTRYPOINT ["java", "-jar", "app.jar"]

# ARG JAR_FILE=target/*.jar 명령어는 'target/*.jar 이라는 값을 가진 JAR_FILE 변수를 사용하겠다'라는 것을 나타냅니다.
# target/*.jar 는 Maven 빌드 환경에서 빌드된 JAR 파일이 저장되는 디렉토리 입니다.


# ./gradlew build && java -jar build/libs/backend-img.jar
# docker build --build-arg JAR_FILE=build/libs/\*.jar -t backend-img2 .


## 백앤드 명령어
# docker rmi -f backend-img
# docker build -t backend-img .

# docker run -it --name backend-con -p 9020:9020 backend-img
# docker run -it --name backend-con -p 9020:9020 --network todo-net backend-img
# docker run -it --name backend-con -p 9020:9020 --network todo-net -e MYSQL_HOST=db -e MYSQL_USER=seung -e MYSQL_PASSWORD=1234 -e MYSQL_DB=todoDB backend-img


## 데이터베이스 명령어
# docker run --name db -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_DATABASE=todoDB -e MYSQL_USER=seung -e MYSQL_PASSWORD=1234 -d --network todo-net mysql:8.0.17
# docker exec -it db /bin/bash     : mysql docker 접속


## 도커 네트워크
# docker network create todo-net
# docker network ls
# docker network inspect todo-net
# docker network connect todo-net backend-con
# docker network disconnect bridge frontend-con

# -i -t는 attach 모드. 
# -d는 -detached 모드이다.
# -e 는 환경변수 지정

# -v /my/own/datadir:/var/lib/mysql



