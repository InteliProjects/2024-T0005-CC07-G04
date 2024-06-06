import { NextFunction, Request, Response, Router } from 'express'; // Importa módulos do Express
import userController from '../controllers/userController'; // Importa o controlador de usuário
import { PrismaUserRepository } from '@modules/user/repository'; // Importa o repositório de usuário do Prisma
import { PrismaClient } from '@prisma/client'; // Importa o cliente Prisma
import { UserService } from '@modules/user/service'; // Importa o serviço de usuário

const router = Router(); // Cria uma instância do roteador do Express

// Cria uma instância do repositório de usuário e do serviço de usuário
const repository = new PrismaUserRepository(new PrismaClient());
const service = new UserService(repository);

// Cria uma instância do controlador de usuário injetando o serviço de usuário
const UserController = userController(service);

// Define as rotas para as operações CRUD de usuário
router.post('/', UserController.createUser); // Rota para criar um novo usuário
router.post('/login', UserController.login); // Rota para fazer login
router.post('/edit', UserController.edit); // Rota para editar um usuário existente
router.get('/', UserController.getUser); // Rota para obter informações de um usuário

export default router; // Exporta o roteador
