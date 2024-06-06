import { NextFunction, Request, Response, Router } from 'express';
import vivoMovelController from '../controllers/vivoMovelController';

// Criar um novo roteador do Express
const router = Router();

// Inicializar o controlador do Vivo Móvel
const VivoMovelController = vivoMovelController();

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
export default router;
