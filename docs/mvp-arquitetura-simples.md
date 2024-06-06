# MVP com deploy da aplicação com arquitetura básica

## Visão Geral 

O MVP foi concebido em torno de três estruturas principais: o backend, o frontend e o banco de dados. No backend, atua como uma camada intermediária entre o frontend e o banco de dados, facilitando a criação, leitura, atualização e exclusão de dados. O frontend incorpora telas ainda não integradas para login, cadastro e um painel de informações, todas destinadas ao aplicativo móvel da Vivo. Ambos, backend e frontend, foram implantados em instâncias EC2, enquanto o banco de dados foi hospedado em um RDS.

## Backend

O desenvolvimento do backend foi realizado empregando TypeScript e várias bibliotecas e frameworks, incluindo Prisma, Argon2, JWT, entre outras. A escolha do TypeScript para este MVP foi fundamentada em sua acessibilidade e intuitividade no desenvolvimento da estrutura do backend, garantindo confiabilidade devido à sua tipagem forte. Prisma foi empregado para facilitar a interação entre o backend e o banco de dados PostgreSQL, tanto na construção de tabelas quanto na execução de consultas. Argon2 foi utilizado para garantir a segurança dos hashes das senhas armazenadas no banco de dados, enquanto JWT foi empregado para assegurar a autenticação por meio de tokens, essenciais para as rotas do desenvolvimento. O backend apresenta três tabelas principais - usuário, plano de internet e conta de internet - cada uma com suas respectivas rotas CRUD disponíveis na documentação, acessível tanto através do Insomnia, localizado em backend/insomniaDocsApi, quanto do Postman, disponível a partir de um link fornecido. Além disso, destaca-se a utilização do padrão de design DDD (Domain-Driven Design) para organizar e estruturar o código de maneira eficiente. Todo o código backend foi implantado em uma instância EC2 da Amazon.

### Banco de Dados

O PostgreSQL foi selecionado como o banco de dados para este projeto devido à sua robustez e confiabilidade. Três tabelas foram construídas para representar as entidades relevantes, oferecendo uma estrutura sólida para armazenamento de dados. Essa estrutura foi implantada no serviço RDS da Amazon, com uma VPC adicional configurada para permitir o acesso e a conectividade adequados entre o banco de dados e o backend.

### Frontend

O frontend foi desenvolvido com uma estrutura de código aberto para agilizar o processo de implementação e validação. Adaptado para incluir telas de login, cadastro e dashboard, todas projetadas de forma responsiva para atender às necessidades específicas do cliente, neste caso, a Vivo. O código foi construído em Next.js e implantado usando o serviço EC2 da AWS, garantindo uma experiência de usuário fluida e intuitiva.

### Links

<a href="https://www.postman.com/planetary-flare-535042/workspace/backendg4"> (1) Testes bem-sucedidos com requisições GET e POST enviadas via Postman para backend hospedado em máquina EC2 na AWS </a>

<a href="https://drive.google.com/file/d/1YeOUu0Kvhw1ZCLw7pKuA1MpImsfE7So-/view?usp=drive_link"> (2) Vídeo de 1 a 3 minutos do console da AWS mostrando a execução de operações CRUD nas tabelas da aplicação criadas no banco de dados AWS RDS </a> 

<a href="https://drive.google.com/file/d/1TIK3YA7LYe6dAmatV3gI_ieOEeGV9X7X/view?usp=drive_link"> (3) Um outro vídeo de 1 a 3 minutos mostrando o Front-end implementado em página estática hospedada em AWS EC2 com Apache ou em AWS S3 </a>