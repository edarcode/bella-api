# Bella

## Resumen

El desarrollo consistirá en crear una base de datos para todos los productos y ventas de Bella.

## Definición de entidades

https://lucid.app/lucidchart/6be8e75d-0d57-4354-8885-e1803f91905b/edit?viewport_loc=44%2C-1315%2C2340%2C1174%2C0_0&invitationId=inv_8138d715-115f-41d7-beca-ebcc2a9c8493#

### Tener en cuenta los roles de usuario : client, admin, master

- POST (admin), salvo facturas (client)
- GET (admin)
- DELETE (master)
- PATCH (master)

### CRUD categorias

- POST /categories
- GET /categories
- GET /categories/:id
- PATCH /categories/:id
- DELETE /categories/:id

### CRUD proveedores

- POST /suppliers
- GET /suppliers (paginado, filtrado y ordenado)
- GET /suppliers/:id
- PATCH /suppliers/:id
- DELETE /suppliers/:id

### CRUD productos

- POST /products
- GET /products (paginado, filtrado y ordenado)
- GET /products/:id
- PATCH /products/:id
- DELETE /products/:id

### CRUD facturas

- POST /bills
- GET /bills (paginado, filtrado y ordenado)
- GET /bills/:id
- PATCH /bills/:id
- DELETE /bills/:id

## Autenticación

Para realizar peticiones a los endpoints se deberá contar con un token que obtendrá al autenticarse. Para ello, deberán desarrollarse los endpoints de registro y login, que permitan obtener un token. Los endpoints encargados de la autenticación deberán ser:

- POST /auth/register
- POST /auth/login

Al registrarse, el usuario deberá recibir un email y verifique su registro. Es recomendable, la utilización de algún servicio de terceros como nodemailer.

### CRUD usuarios

- GET /users (paginado, filtrado y ordenado)
- GET /users/:id
- PATCH /users?id=id
- DELETE /users?id=id
