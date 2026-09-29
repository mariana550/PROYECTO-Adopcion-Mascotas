#Trae el linux y el node 20
FROM node:20-alpine
#Es la carpeta base donde ocurre todo 
WORKDIR /app
#Instala las dependencias
COPY package*.json ./
RUN npm ci
#Copia el codigo y las pruebas 
COPY src ./src
COPY tests ./tests
#Ejecuta todas las pruebas 
CMD ["npm", "test"]