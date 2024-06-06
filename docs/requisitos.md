# Requisitos Funcionais e Não Funcionais

Os requisitos do sistema são levantamentos que abordam tudo aquilo que será desenvolvido de acordo com as necessidades do cliente. Eles compreendem tanto a descrição das funcionalidades requisitadas quanto a maneira/métrica em que vão operar. 

## 1. Requisitos Funcionais
Os requisitos funcionais abrangem todas as funcionalidades declaradas do sistema, ou seja, tudo aquilo que ele precisa realizar para acatar com as necessidades do cliente.

RF0: Os usuários devem ser capazes de se cadastrar na aplicação.

RF1: A aplicação deve permitir que o usuário faça login.

RF2: Esta plataforma deve fornecer informações sobre o plano atual do usuário através de consulta.

Explicação: Informações como consumo de internet,saldo e outros dados relevantes.

RF3: O sistema deve permitir que os usuários visualizem e recebam notificações sobre as novas ofertas da operadora.

Explicação: Isso será realizado por meio de uma plataforma integrada que apresente as ofertas de forma eficiente, com foco na experiência do usuário.

RF4: O sistema deve ser capaz de consultar um banco de dados na nuvem para recuperar informações cadastrais do usuário, incluindo ofertas e dados importantes sobre os serviços contratados. 

Explicação: Isso será feito por meio de uma API que gerencie as diversas requisições e consultas entre os bancos de dados, recuperando diretamente os dados dos bancos hospedados na nuvem.

RF5: Os usuários devem ser capazes de acessar informações relacionadas aos seus planos de internet ou Vivo Fibra.

RF6: Os usuários devem poder editar suas informações pessoais conforme necessário.

RF7: Os usuários devem ser capazes de excluir suas contas, seguindo as diretrizes estabelecidas pela LGPD (Lei Geral de Proteção de Dados).

## 2. Requisitos Não Funcionais
Utilizando o padrão da ISO 25010 para a análise dos requisitos não funcionais, requisitos não funcionais detalham o comportamento e as propriedades do sistema, como desempenho, segurança e usabilidade. Eles não descrevem o que o sistema faz, mas como deve fazê-lo, afetando diretamente a qualidade e a experiência do usuário. São essenciais para a eficiência e operação adequada do sistema.

RNF 01 - Desempenho: Este requisito se refere à capacidade do sistema de responder e processar dados em um período de tempo adequado.

Descrição: No contexto do projeto, o tempo de resposta entre a requisição do usuário e o barramento de dados deve ser inferior a 3 segundos. 

Plano de teste: Realizar testes de carga utilizando ferramentas para simular o tráfego de usuários em diferentes cenários de pico e verificar se o tempo de resposta para o usuário se mantém abaixo de 3 segundos. Através do Grafana K6, monitorar o desempenho em tempo real durante os testes para identificar possíveis problemas e otimizações necessárias.

RNF 02 - Elasticidade e Usabilidade: O sistema deve ser capaz de lidar com variações significativas de tráfego e acessos, escalando recursos automaticamente conforme necessário. 

Descrição: No contexto do projeto, o sistema precisa ser escalável o bastante para suportar picos de demanda sem comprometer a qualidade de serviço, garantindo uma experiência contínua e satisfatória para os usuários.

Plano de teste: Realizar testes de escalabilidade para avaliar a capacidade do sistema de expandir ou contrair seus recursos, incluindo processamento e armazenamento, simulando o acesso de múltiplos usuários. Durante os testes, através do Grafana K6,  monitorar o tempo de resposta e a utilização de recursos para assegurar a eficácia do ajuste automático de escala.

RNF 03  - Tolerância a falhas: 
Descrição: O sistema deve ser capaz de continuar operando de forma satisfatória mesmo diante de falhas em componentes específicos.

Plano de teste: Realizar testes de resiliência, aplicando falhas controladas nos componentes do sistema (como instâncias de servidor, banco de dados, etc.) e verificando se o sistema consegue se recuperar automaticamente, mantendo a disponibilidade e o desempenho necessários.

RNF 04 - Segurança:
Descrição: O sistema deve proteger os dados sensíveis e garantir a autenticidade, integridade e confidencialidade das informações.

Plano de teste: Realizar testes de segurança para identificar vulnerabilidades. Verificar também a eficácia das tecnologias de autenticação, autorização e criptografia implementadas no sistema.
