# Node.js image kullanarak başla
FROM node:18-alpine AS build
WORKDIR /app

# Bağımlılıkları yükle
COPY package.json package-lock.json ./
RUN npm install

# Kaynak kodunu kopyala ve derle
COPY . ./
RUN npm run build

# Nginx kullanarak derlenen uygulamayı sun
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
