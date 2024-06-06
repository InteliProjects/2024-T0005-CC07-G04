# Use uma imagem base que tenha apt e OpenJDK 17
FROM debian:bullseye-slim

# Instale o OpenJDK 17 JRE usando apt
RUN apt-get update && apt-get install -y openjdk-17-jre-headless

# Instale o PostgreSQL Client usando apt
RUN apt update && apt install -y postgresql-client

# Diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo JAR do seu aplicativo para o contêiner
COPY build/libs/vivoFibra-0.0.1-SNAPSHOT.jar ./vivoFibra-0.0.1-SNAPSHOT.jar
 
# Porta em que o aplicativo será exposto
EXPOSE 8081

# Defina as variáveis de ambiente para acesso ao banco de dados
ENV DB_HOST=vivofibra.cdxad1iuggna.us-east-1.rds.amazonaws.com
ENV DB_USER=postgres
ENV DB_PASSWORD=Inteli123#4
ENV DB_NAME=vivoFibra

# Comando para executar o aplicativo quando o contêiner for iniciado
CMD ["java", "-jar", "./vivoFibra-0.0.1-SNAPSHOT.jar"]
