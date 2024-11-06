# Temel Node.js imajı
FROM node:18-alpine AS build
WORKDIR /app

# Bağımlılık dosyalarını kopyala ve yükle
COPY package.json package-lock.json ./
RUN npm install

# Uygulama kodunu kopyala ve derle
COPY . ./
RUN npm run build

# Stage 2: Certbot ile SSL sertifikası almak için geçici bir imaj
FROM certbot/certbot AS certbot
WORKDIR /certbot

# Certbot için gerekli olan komutları burada çalıştırabilirsiniz
# Örneğin: Sertifika almak için gerekli olan komut
#RUN certbot certonly --standalone -d localhost --email your-email@example.com --agree-tos --non-interactive

# Stage 3: Serve the app with Nginx
FROM nginx:alpine

# Build klasörünü Nginx'in kök dizinine kopyala
COPY --from=build /app/build /usr/share/nginx/html

# Certbot'tan alınan sertifikaları Nginx'e kopyala
#COPY --from=certbot /etc/letsencrypt /etc/letsencrypt
COPY localhost.crt /etc/ssl/certs/localhost.crt
COPY localhost.key /etc/ssl/private/localhost.key
# Nginx yapılandırma dosyasını kopyala
COPY konyaikamet.conf /etc/nginx/conf.d/default.conf

# Gerekli portları aç
EXPOSE 80
EXPOSE 443

# Nginx'i çalıştır
CMD ["nginx", "-g", "daemon off;"]
