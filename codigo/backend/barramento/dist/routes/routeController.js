"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cacheRouter_1 = __importDefault(require("../controllers/cacheRouter"));
// Criar um novo roteador do Express
const router = (0, express_1.Router)();
// Inicializar o controlador de usuário
const CacheControler = (0, cacheRouter_1.default)();
// Rota para obter informações de um usuário (GET /)
router.get('/cache/:id', CacheControler.getRedis);
// Exportar o roteador
exports.default = router;
//# sourceMappingURL=routeController.js.map