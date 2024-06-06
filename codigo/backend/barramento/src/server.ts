// Importações dos módulos necessários
import express from 'express';
import bodyParser from 'body-parser';

// Importações dos módulos de rotas
import userRoutes from './routes/userRoutes';
import vivoFibraRoutes from './routes/vivoFibraRoutes';
import vivoMovelRoutes from './routes/vivoMovelRoutes';

// Criação da instância do aplicativo Express
const app = express();

// Uso do middleware para análise do corpo da requisição em formato JSON
app.use(bodyParser.json());

// Uso do middleware para permitir o CORS
const cors = require('cors');
app.use(cors());

// Definição da porta do servidor
const port = 8079;

// Uso das rotas definidas nos módulos importados
app.use('/user', userRoutes);
app.use('/vivoFibra', vivoFibraRoutes);
app.use('/vivoMovel', vivoMovelRoutes);

/**
 * Rota de verificação de saúde do servidor.
 * 
 * @param {Request} req - O objeto de requisição.
 * @param {Response} res - O objeto de resposta.
 */
app.get("/health", (req, res) => {
  res.send("Server is healthy");
});

// Inicialização do servidor, ouvindo na porta especificada
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});