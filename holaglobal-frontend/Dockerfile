# Temel Node.js imajı
FROM node:18-alpine

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

# Uygulamanın çalışacağı portu belirtin
EXPOSE 3000

# Uygulamayı başlatın
CMD ["npm", "start"]
