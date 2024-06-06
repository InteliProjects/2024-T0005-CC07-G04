# Use a imagem oficial do Node.js 20.10 como base
FROM node:20.10

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos do código-fonte
COPY . .

# Instale as dependências do TypeScript e do projeto
RUN npm install typescript
RUN npm install

# Instale o Prisma globalmente
RUN npm install -g prisma

# Expor a porta em que o aplicativo será executado
EXPOSE 8080

# Adicione as dependências do PostgreSQL
RUN apt-get update && apt-get install -y postgresql-client

# Definir as variáveis de ambiente para acesso ao banco de dados
ENV DB_HOST=vivouser.cdxad1iuggna.us-east-1.rds.amazonaws.com
ENV DB_USER=postgres
ENV DB_PASSWORD=Inteli123#4
ENV DB_NAME=vivoUser

# Adicione o diretório node_modules/.bin ao PATH
ENV PATH /app/node_modules/.bin:$PATH

# Comando para iniciar a aplicação
CMD prisma db push && node dist/server.js
