# Usa la imagen oficial de Node.js como base
FROM node:20-alpine AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias (limpia cache si es necesario)
RUN npm ci --only=production

# Copia el resto del código fuente
COPY . .

# Limpia node_modules y reinstala para evitar conflictos de plataforma
RUN rm -rf node_modules && npm install

# Construye la aplicación para producción
RUN npm run build --prod

# Usa una imagen de servidor web ligero para servir la aplicación
FROM nginx:alpine

# Copia los archivos construidos al directorio de Nginx
COPY --from=build /app/dist/semana3-angular /usr/share/nginx/html

# Expone el puerto 8088
EXPOSE 8088

# Comando por defecto para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]