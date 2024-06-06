import { Router } from 'express';
import userController from '../controllers/userController';

// Criar um novo roteador do Express
const router = Router();

// Inicializar o controlador de usuário
const UserController = userController();

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
export default router;
