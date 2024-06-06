"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vivoMovelController_1 = __importDefault(require("../controllers/vivoMovelController"));
// Criar um novo roteador do Express
const router = (0, express_1.Router)();
// Inicializar o controlador do Vivo Móvel
const VivoMovelController = (0, vivoMovelController_1.default)();
// Rota para adicionar informações do Vivo Móvel (POST /)
router.post('/', VivoMovelController.addMovel);
// Rota para obter informações do Vivo Móvel (GET /)
router.get('/', VivoMovelController.getMovel);
// Rota para obter informações específicas do Vivo Móvel por ID (GET /:id)
router.get('/:id', VivoMovelController.getMovelById);
// Rota para atualizar informações do Vivo Móvel por ID (PUT /:id)
router.put('/:id', VivoMovelController.attMovel);
// Rota para excluir informações do Vivo Móvel por ID (DELETE /:id)
router.delete('/:id', VivoMovelController.deleteMovel);
// Exportar o roteador
exports.default = router;
//# sourceMappingURL=vivoMovelRoutes.js.map