# Temel imaj olarak Eclipse Temurin kullanıyoruz
FROM eclipse-temurin:21-jdk-alpine AS builder

# Çalışma dizini oluştur
WORKDIR /app

# Maven wrapper'ı kopyala ve bağımlılıkları indir
COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN ./mvnw dependency:go-offline -B

# Proje kaynaklarını kopyala ve jar dosyasını oluştur
COPY src ./src
RUN ./mvnw clean package -DskipTests

# Yeni bir imaj oluştur, JAR dosyasını sadece çalıştırmak için kullan
FROM eclipse-temurin:21-jre-alpine

# Uygulamanın çalışma dizinini ayarla
WORKDIR /app

# JAR dosyasını "builder" aşamasından kopyala
COPY --from=builder /app/target/HolaGlobal-0.0.1-SNAPSHOT.jar app.jar

# Uygulamayı çalıştır
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
