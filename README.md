# Documentación del Proyecto Disco Service

## Descripción del Proyecto

El proyecto Disco Service es una API diseñada para gestionar artistas de una base de datos musical. Esta API proporciona endpoints para crear, actualizar, obtener y eliminar artistas. A continuación, se detallan los métodos disponibles y cómo utilizarlos.

## Estrategia de ramas para un proyecto de seis personas
En un proyecto de desarrollo de software con seis personas, es importante contar con una estrategia de ramas clara y bien definida para garantizar la colaboración efectiva entre los miembros del equipo.

Una estrategia de ramas es un conjunto de reglas que definen cómo se crean, manejan y fusionan las ramas en un repositorio de control de versiones. Una estrategia de ramas bien diseñada puede ayudar a evitar conflictos, mejorar la productividad y facilitar la depuración y el despliegue.

Para un proyecto de seis personas, recomiendo la siguiente estrategia de ramas:

- Rama principal: Esta rama contiene el código que se ha probado y está listo para ser desplegado.
- Rama de desarrollo: Esta rama es donde los desarrolladores realizan su trabajo.
- Ramas de características: Estas ramas se usan para desarrollar nuevas características o funcionalidades.
- Ramas de correcciones de errores: Estas ramas se usan para corregir errores encontrados en la rama principal.

Esta estrategia es sencilla y fácil de implementar. Además, proporciona un buen equilibrio entre la flexibilidad y el control.

A continuación, se describen los detalles de cada tipo de rama:

### Rama principal

La rama principal es la rama más importante del proyecto. Contiene el código que se ha probado y está listo para ser desplegado.

Los miembros del equipo deben fusionar sus ramas de desarrollo en la rama principal antes de desplegar el código.

### Rama de desarrollo

La rama de desarrollo es donde los desarrolladores realizan su trabajo.

Los desarrolladores deben crear una nueva rama de desarrollo para cada nueva característica o funcionalidad que trabajen.

Cuando el trabajo en una rama de desarrollo esté completo, el desarrollador debe fusionar la rama en la rama principal.

### Ramas de características

Las ramas de características se usan para desarrollar nuevas características o funcionalidades.

Los desarrolladores deben crear una nueva rama de características para cada nueva característica o funcionalidad que trabajen.

Cuando el trabajo en una rama de características esté completo, el desarrollador debe fusionar la rama en la rama principal.

### Ramas de correcciones de errores

Las ramas de correcciones de errores se usan para corregir errores encontrados en la rama principal.

Los desarrolladores deben crear una nueva rama de correcciones de errores para cada error que encuentren.

Cuando el error se haya corregido, el desarrollador debe fusionar la rama en la rama principal.

Esta estrategia de ramas puede adaptarse a las necesidades específicas del proyecto. Por ejemplo, si el proyecto es muy grande o complejo, es posible que sea necesario crear más tipos de ramas.

También es importante tener en cuenta las herramientas de control de versiones que se utilizan en el proyecto. Algunas herramientas proporcionan funciones que pueden facilitar la implementación de una estrategia de ramas.

## Guía de Despliegue

**Título:** Guía de Despliegue

## Instrucciones para Ejecutar

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

1. Clona el repositorio en tu máquina local.

2. Abre el proyecto en tu entorno de desarrollo preferido.

3. Asegúrate de que tengas las dependencias necesarias instaladas, como Spring Boot y Swagger.

4. Ejecuta la aplicación desde tu IDE o utilizando un comando como `mvn spring-boot:run`.

La aplicación estará disponible en `http://localhost:8080` de forma predeterminada, pero puedes configurar el puerto en el archivo de propiedades de Spring Boot según tus preferencias.

## Docker
```dockerfile
# Usa la imagen oficial de Maven como imagen base
FROM maven:3.8.4-openjdk-11-slim AS build

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
```
```
$ docker build -t rafaelmmurga/disco-service:latest .
$ docker run -p 8080-8080 rafaelmmurga/disco-service:latest 
``` 

## Kubernetes
```
$ kubectl apply -f src/main/resources/manifests/disco-service-deployment.yaml

$ kubectl apply -f src/main/resources/manifests/disco-service-service.yaml

$ kubectl apply -f src/main/resources/manifests/disco-service-ingress.yaml
```

## Dependencias
Configuración de MongoDB para el Microservicio
El microservicio Java Spring Boot se conecta a una base de datos MongoDB utilizando la dependencia spring-boot-starter-data-mongodb. 

Asegúrate de incluir las siguientes dependencias en tu proyecto Spring Boot para habilitar la conexión a MongoDB:

```xml
<dependencies>
    <!-- Otras dependencias de Spring Boot -->

    <!-- Dependencia para MongoDB -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-mongodb</artifactId>
    </dependency>
</dependencies>
```
Asegúrate de que estas dependencias estén definidas en tu archivo pom.xml (si estás utilizando Maven) o en el archivo de construcción de dependencias correspondiente si utilizas otra herramienta de construcción como Gradle.

Estas dependencias permitirán que tu aplicación Spring Boot se comunique con MongoDB de manera efectiva.

Recuerda que también debes configurar las propiedades de conexión a MongoDB y el puerto del servidor Tomcat, como se menciona en las secciones anteriores, para que tu microservicio funcione correctamente.


Antes de ejecutar el microservicio, asegúrate de configurar adecuadamente las propiedades de conexión a la base de datos en el archivo application.properties. 
Aquí hay un ejemplo de cómo configurar las propiedades:


# Configuración de MongoDB
spring.data.mongodb.host=${MONGO_HOSTNAME}       # Host de la base de datos MongoDB
spring.data.mongodb.authentication-database=${MONGO_AUTHDB} # Base de datos de autenticación de MongoDB (si es necesario)
spring.data.mongodb.database=${MONGO_DB}         # Nombre de la base de datos que utilizará el microservicio
spring.data.mongodb.username=${MONGO_USER}       # Nombre de usuario para autenticación en MongoDB
spring.data.mongodb.password=${MONGO_PWD}       # Contraseña para autenticación en MongoDB
Asegúrate de reemplazar ${MONGO_HOSTNAME}, ${MONGO_AUTHDB}, ${MONGO_DB}, ${MONGO_USER} y ${MONGO_PWD} con los valores específicos de tu entorno.

Configuración del Puerto del Servidor Tomcat
Además de la configuración de MongoDB, también puedes especificar el puerto en el que deseas que se ejecute tu servidor Tomcat utilizando la siguiente propiedad en el archivo application.properties:

properties
Copy code
# Configuración del puerto del servidor Tomcat
server.port=${TOMCAT_PORT}
Reemplaza ${TOMCAT_PORT} con el número de puerto que deseas asignar a tu servidor Tomcat.

Una vez que hayas configurado correctamente estas propiedades en tu archivo application.properties, estarás listo para ejecutar tu microservicio Java Spring Boot con la configuración de MongoDB y el puerto de Tomcat deseado.

¡Listo! Con esta configuración, tu microservicio debería estar preparado para conectarse a MongoDB y ejecutarse en el puerto especificado. No olvides proporcionar los valores adecuados para las variables de entorno en tu entorno de desarrollo o implementación.

## Pruebas del Servicio

Puedes probar los endpoints de la API utilizando herramientas como Postman o cURL. A continuación, se muestran ejemplos de cómo realizar pruebas del servicio utilizando los métodos definidos en la interfaz `ArtistaApi`.

### Crear Artista

Para crear un artista, realiza una solicitud POST a la siguiente URL:

```http
POST http://localhost:8080/api/artistas
```

Envía los datos del artista en el cuerpo de la solicitud en formato JSON. Por ejemplo:

```json

{
  "nombre": "Artista de Prueba",
  "descripcion": "Este es un artista de prueba para la documentación."
}

```

La respuesta debería ser similar a:

```json
{
  "id": "1",
  "nombre": "Artista de Prueba",
  "descripcion": "Este es un artista de prueba para la documentación."
}
```

Actualizar Artista
Para actualizar un artista, realiza una solicitud PUT a la siguiente URL, incluyendo el ID del artista que deseas actualizar en la URL:

```http
PUT http://localhost:8080/api/artistas/1
```

Envía los datos actualizados del artista en el cuerpo de la solicitud en formato JSON. Por ejemplo:

```json
{
  "nombre": "Artista Actualizado",
  "descripcion": "Este artista ha sido actualizado."
}
```

La respuesta debería ser similar a:

```json
{
  "id": "1",
  "nombre": "Artista Actualizado",
  "descripcion": "Este artista ha sido actualizado."
}
```

Obtener Artista por ID
Para obtener un artista por su ID, realiza una solicitud GET a la siguiente URL, incluyendo el ID del artista en la URL:

```http
GET http://localhost:8080/api/artistas/1
```

La respuesta será el detalle del artista correspondiente.

Obtener Todos los Artistas
Para obtener todos los artistas, realiza una solicitud GET a la siguiente URL:

```http
GET http://localhost:8080/api/artistas
```

La respuesta será una lista de todos los artistas en la base de datos.

Eliminar Artista por ID
Para eliminar un artista por su ID, realiza una solicitud DELETE a la siguiente URL, incluyendo el ID del artista en la URL:

```http
DELETE http://localhost:8080/api/artistas/1
```

La respuesta debería ser una respuesta sin contenido (204 No Content).