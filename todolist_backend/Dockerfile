FROM openjdk:11-jre-slim

CMD ["./mvnw", "clean", "package"]
ARG JAR_FILE_PATH=target/*.jar
COPY ${JAR_FILE_PATH} app.jar

EXPOSE 9020

ENTRYPOINT ["java", "-jar", "app.jar"]

# docker build -t backend-img .
# docker run --name backend-con -v ${pwd}:/usr/src/app -p 9020:9020 -d backend-img