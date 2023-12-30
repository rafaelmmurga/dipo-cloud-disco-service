FROM maven:3.8.4-openjdk-11-slim AS build
LABEL Rafael Martinez Murga <rafael.martinez@cevisur.com.mx>

ENV MONGO_HOSTNAME mongodb+srv://rafael.martinez:blackburzum6B@cluster0.rd0rzqg.mongodb.net/unam
ENV MONGO_DB unam
ENV MONGO_USER rafael.martinez
ENV MONGO_PWD blackburzum6B
ENV TOMCAT_PORT 8080
EXPOSE 8080
RUN echo "The MONGO_HOSTNAME env value is $MONGO_HOSTNAME"

# Copia los archivos de configuración y el código fuente
COPY src /usr/src/app/src
COPY pom.xml /usr/src/app

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Compila la aplicación
RUN mvn clean install

# Cambia a una imagen más ligera de Java para la ejecución
FROM openjdk:11-jre-slim

# Copia el archivo JAR generado en la etapa anterior
COPY --from=build /usr/src/app/target/disco-service-0.0.1-SNAPSHOT.jar /app/disco-service.jar

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 8080

# Comando para ejecutar la aplicación al iniciar el contenedor
CMD ["java", "-jar", "/app/disco-service.jar"]


