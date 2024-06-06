"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/userController"));
// Criar um novo roteador do Express
const router = (0, express_1.Router)();
// Inicializar o controlador de usuário
const UserController = (0, userController_1.default)();
// Rota para criar um novo usuário (POST /)
router.post('/', UserController.createUser);
// Rota para fazer login (POST /login)
router.post('/login', UserController.login);
// Rota para editar um usuário existente (POST /edit)
router.post('/edit', UserController.edit);
// Rota para obter informações de um usuário (GET /)
router.get('/', UserController.getUser);
router.get('/cache/:id', UserController.getRedis);
// Exportar o roteador
exports.default = router;
//# sourceMappingURL=userRoutes.js.map