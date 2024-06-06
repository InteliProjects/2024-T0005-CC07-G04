# Grupo-4

# Introdução

Este é o repositório dos arquivos dos alunos do Módulo 7 do curso de Ciência da Computação do Inteli no 1º trimestre de 2024. Durante este trimestre está sendo desenvolvido um projeto em parceria com a Vivo.

<table>
<tr>
<td>
<a href= "https://www.vivo.com.br/"> <img src="docs/img/vivo-logo.png" alt="vivo.com.br" border="0" width="20%"></a>
</td>
<td><a href= "https://www.inteli.edu.br/"><img src="docs/img/inteli-logo.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0" width="50%"></a>
</td>
</tr>
</table>

# Projeto: *4G - Além das Nuvens*

# Grupo: *4G*

# Integrantes:

* [Arthur Nisa](https://www.linkedin.com/in/arthur-nisa-de-paula-932746252/)
* [Esther Hikari](https://www.linkedin.com/in/estherhikari/)
* [Henrique Godoy](https://www.linkedin.com/in/henrique-godoy-879138252/)
* [Thomaz Klifson](https://www.linkedin.com/in/thomaz-klifson-046490125/)
* [Marcos Teixeira](https://www.linkedin.com/in/marcos-teixeira-37676a24a/)

# Descrição

Aprimoramento do sistema da Vivo para aumentar sua velocidade, com uma infraestrutura robusta capaz de atender à demanda de usuários

# Configuração para desenvolvimento

## Pré-requisitos para rodar a aplicação

### Node.js, npm e Typescript

Node.js é um ambiente de execução JavaScript do lado do servidor. Npm é o seu gerenciador de pacotes, e Typescript é uma linguagem de programação que adiciona tipagem estática ao JavaScript.

### Prisma

Prisma é uma ferramenta de banco de dados que simplifica a interação com bancos de dados SQL.

### Kotlin 

Kotlin é uma linguagem de programação moderna, concisa e segura para desenvolvimento de aplicativos Android, servidores, web e desktop.

## Etapas para inicializar a aplicação

Considerando que o sistema é composto por 3 microserviços, um barramento centralizado para esses microserviços e um frontend, siga as etapas abaixo para inicializar cada componente:

### Barramento
1. Execute `npm i` para instalar as dependências.
2. Execute `npm run build` para compilar o código.
3. Execute `npm start` para iniciar o barramento.

### microservice1

1. Execute `npm i` para instalar as dependências.
2. Execute `npm run build` para compilar o código.
3. Execute `npm start` para iniciar o microserviço 1.
   
### microservice2

1. Execute `./gradlew build` para compilar o código.
2. Execute `java -jar build/libs/VivoMovelApplication.jar` para iniciar o microserviço 2

### microservice3

1. Execute `./gradlew build` para compilar o código.
2. Execute `java -jar build/libs/VivoFibraApplication.jar` para iniciar o microserviço 3
   
### Frontend

Execute `npm run dev` para iniciar o servidor de desenvolvimento do frontend.

# Documentação

Os arquivos da documentação deste projeto estão na pasta [docs/index.md](docs/index.md), e o seu conteúdo é publicado via GitHub Pages.

## 📋 Licença/License

<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/">

<a property="dct:title" rel="cc:attributionURL">4G</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName">Inteli, Arthur Nisa, Esther Hikari, Henrique Godoy, Thomaz Klifson, Marcos Teixeira</a> is licensed under <a href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International</a>.</p>
