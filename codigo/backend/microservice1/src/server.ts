import express from 'express'; // Importa o módulo 'express' para criar o aplicativo
import bodyParser from 'body-parser'; // Importa o módulo 'body-parser' para analisar corpos de solicitação HTTP
import userRoutes from './routes/userRoutes'; // Importa as rotas relacionadas ao usuário

const app = express(); // Cria uma instância do aplicativo Express

app.use(bodyParser.json()); // Usa o middleware 'body-parser' para analisar o corpo das solicitações como JSON

const cors = require('cors'); // Importa o módulo 'cors' para lidar com as políticas de CORS
app.use(cors()); // Usa o middleware 'cors' para permitir solicitações de diferentes origens

const port = 8080; // Define a porta do servidor

app.use('/user', userRoutes); // Define o prefixo '/user' para todas as rotas relacionadas ao usuário

app.listen(port, () => {
  console.log(`Server is running on port ${port}`); // Inicia o servidor na porta especificada e imprime uma mensagem no console
});
