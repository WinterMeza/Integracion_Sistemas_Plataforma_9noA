# Taller n°4 
### INTEGRANTES:
- Casanova Castro Julio
- Lino Canales Sergio
- Lucas Lucas Caroline
- Meza Jimenez Winter
- Ponce Moreira Kevin

## Documentacion del taller

### Definir configuraciones y secretos para los parámetros de la base de datos y servicio REST.
- Definir configuraciones en MongoDB

![Alt text](./evidencias/image.png)

- Definir los secretos 

![Alt text](./evidencias/image1.png)

### Definir el Deployment y el Service para levantar su base de datos
- Crear el deployment de la base de datos

![Alt text](./evidencias/image2.png)

- Crear el service con los puertos y protocolos usados

![Alt text](./evidencias/image3.png)

### Definir el Deployment y el Service para levantar el servicio REST.
- Crear el deployment del servicio REST

![Alt text](./evidencias/image4.png) 

- Definir el service

![Alt text](./evidencias/image5.png)

### Aplicar la configuracion de los archivos

- Configuraciones y secretos
```
kubectl apply -f configmap.yaml
kubectl apply -f secret.yaml
```
- Deployment y Service de Mongo
```
kubectl apply -f kubernetes/mongo-deployment.yaml
kubectl apply -f kubernetes/mongo-service.yaml
```
- Deployment y Service del servicio Rest
```
kubectl apply -f kubernetes/rest-service-deployment.yaml
kubectl apply -f kubernetes/rest-service-service.yaml
```
![Alt text](./evidencias/image6.png)

### Mostrar el estado de la configuración
```
kubectl get all -n default
```
![Alt text](./evidencias/image7.png)

### Obtener el log de un objeto especifico
![Alt text](./evidencias/image8.png)

### Exponer el servicio para probarlo
![Alt text](./evidencias/image9.png)

![Alt text](./evidencias/image10.png)

