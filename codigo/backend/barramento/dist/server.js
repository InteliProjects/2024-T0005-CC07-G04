"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importações dos módulos necessários
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
// Importações dos módulos de rotas
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const vivoFibraRoutes_1 = __importDefault(require("./routes/vivoFibraRoutes"));
const vivoMovelRoutes_1 = __importDefault(require("./routes/vivoMovelRoutes"));
// Criação da instância do aplicativo Express
const app = (0, express_1.default)();
// Uso do middleware para análise do corpo da requisição em formato JSON
app.use(body_parser_1.default.json());
// Uso do middleware para permitir o CORS
const cors = require('cors');
app.use(cors());
// Definição da porta do servidor
const port = 8079;
// Uso das rotas definidas nos módulos importados
app.use('/user', userRoutes_1.default);
app.use('/vivoFibra', vivoFibraRoutes_1.default);
app.use('/vivoMovel', vivoMovelRoutes_1.default);
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
//# sourceMappingURL=server.js.map