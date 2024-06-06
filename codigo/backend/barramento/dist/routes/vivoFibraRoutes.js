"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vivoFibraController_1 = __importDefault(require("../controllers/vivoFibraController"));
// Criar um novo roteador do Express
const router = (0, express_1.Router)();
// Inicializar o controlador do Vivo Fibra
const VivoFibraController = (0, vivoFibraController_1.default)();
// Rota para adicionar informações do Vivo Fibra (POST /)
router.post('/', VivoFibraController.addFibra);
// Rota para obter informações do Vivo Fibra (GET /)
router.get('/', VivoFibraController.getFibra);
// Rota para obter informações específicas do Vivo Fibra por ID (GET /:id)
router.get('/:id', VivoFibraController.getFibraById);
// Rota para atualizar informações do Vivo Fibra por ID (PUT /:id)
router.put('/:id', VivoFibraController.attFibra);
// Rota para excluir informações do Vivo Fibra por ID (DELETE /:id)
router.delete('/:id', VivoFibraController.deleteFibra);
// Exportar o roteador
exports.default = router;
//# sourceMappingURL=vivoFibraRoutes.js.map