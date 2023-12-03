***
# Taller 4 - Segundo Parcial
- SEGUNDO PARCIAL: TALLER 04.
- Facultad: Ciencias de la Vida y Tecnología.
- Carrera: Ingeniería en Tecnologías de la Información.
- Curso: Noveno "A" 2023(2).
- Docente: Ing. Jhon Antonio Cevallos Macías, Mg.

### ESTUDIANTE:

- Nombres y Apellidos: Winter Aníbal Meza Jiménez.
***
## Link del REPOSITORIO:

https://github.com/WinterMeza/prueba_1

## Documentacion del taller
### Crear un Repositorio
El paso inicial involucra establecer un nuevo repositorio en GitHub y luego cargar el código fuente.

![Alt text](../Taller04-2p/imagen/img1.png)

### Utilizando Comandos
Empleamos comandos específicos para cargar el código fuente al repositorio.

![Alt text](../Taller04-2p/imagen/img2.1.png)
Código fuen te subido al repositorio.

![Alt text](../Taller04-2p/imagen/img2.2.png)

### Crear Docker_User y Docker_Password

Configurar los secretos `Docker_User` y `Docker_Password` en GitHub para asegurar la autenticación.

![Alt text](image3.png)

Agregamos un nuevo secret y luego tendremos los secrets creados dentro del repositorio.

![Alt text](image4.png)

### Generación de Token en Docker Hub

Es necesario crear un token en Docker Hub, el cual deberá ser copiado para su uso posterior como `Docker_Password`.

![Alt text](image5.png)

![Alt text](image5.1.png)

Token creado en Docker Hub

![Alt text](image5.2.png)

### Docker y Docker Hub

Dockerizamos el codigo y creamos la imagen en Docker Hub:

```
docker build --target dev-deps -t tagname .
```
![Alt text](image06.png)

```
docker build --target builder -t tagname .
```
![Alt text](image6.1.png)

```
docker build --target prod-deps -t tagname .
```

![Alt text](image6.2.png)

```
docker build --target prod -t tagname .
```
```
docker build --tag wintermeza/practica04:latest
```
![Alt text](image-1.png)

```
docker push wintermeza/practica04:latest
```
![Alt text](image7.png)

![Alt text](image7.1.png)

### Agregar el Workflow

![Alt text](image-2.png)

![Alt text](image-3.png)

Realizamos cambios en el repositorio para mostrar que el Actions y el Docker Hub realizan los cambios correctamente

![Alt text](image-4.png)

![Alt text](image-5.png)
