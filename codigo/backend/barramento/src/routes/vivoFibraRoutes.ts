import { NextFunction, Request, Response, Router } from 'express';
import vivoFibraController from 'controllers/vivoFibraController';

// Criar um novo roteador do Express
const router = Router();

// Inicializar o controlador do Vivo Fibra
const VivoFibraController = vivoFibraController();

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
export default router;
