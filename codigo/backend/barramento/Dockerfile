# Use a imagem oficial do Node.js 20.10 como base
FROM node:20.10

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos do código-fonte
COPY . .

# Instale as dependências do projeto
RUN npm install typescript
RUN npm install

# Exponha a porta em que o aplicativo será executado
EXPOSE 8079

# Adicione as dependências do PostgreSQL
RUN apt-get update && apt-get install -y postgresql-client

CMD ["node", "dist/server.js"]
