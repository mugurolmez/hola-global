# Temel Node.js imajı
FROM node:18-alpine AS build

# Çalışma dizini oluştur
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./

# npm install kullanarak bağımlılıkları yükle
RUN npm install

# Uygulama kaynaklarını kopyala
COPY . .

# React uygulamanızı build edin
RUN npm run build

# Nginx ile serve etmek için
FROM nginx:alpine

# Build klasörünü Nginx'in html dizinine kopyala
COPY --from=build /app/build /usr/share/nginx/html

# Uygulamanın çalışacağı portu belirtin
EXPOSE 80

