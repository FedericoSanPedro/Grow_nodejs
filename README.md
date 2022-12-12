# Grow_nodejs

Para mandar el proyecto npm run start
crear el .env con sus codigos respectivos.

Abrir postman y usar urls como:
http://localhost:9000/api/users

login: usar post y enviar por body el email y contraseña
http://localhost:9000/api/login
este creara un token y con este puedo ingresar a urls que pidan de este como:
POST: http://localhost:9000/api/products

para crear proyecto similar usar comando npm i (dependencias que se encuentran en el package.json y nodemon)
agregar el package.json 
  "type": "module",
  y su seccion scripts 
    "start": "nodemon src/index.js"