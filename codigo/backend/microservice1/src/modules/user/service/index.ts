import { LoginRequest, LoginResponse, RegisterRequest } from "@modules/user/dtos"; // Importa os tipos de requisição para login e registro
import { User } from "@modules/user/entities"; // Importa o modelo de usuário
import { IUserRepository } from "@modules/user/repository"; // Importa a interface do repositório de usuário
import { UserEditRequest } from '@modules/user/dtos'; // Importa o tipo de requisição de edição do usuário

import bcrypt from 'bcrypt'; // Importa o módulo bcrypt para criptografia de senha

const SALT_ROUNDS = 10; // Define o número de rounds para a geração do salt

const argon2 = require('argon2'); // Importa o módulo argon2 para criptografia de senha

export class UserService {
    repository: IUserRepository; // Repositório de usuário

    constructor(repository: IUserRepository) {
        this.repository = repository;
    }

    // Método para registrar um novo usuário
    Register = async (req: RegisterRequest): Promise<User> => {
        
        // Hash da senha usando bcrypt
        const password = await bcrypt.hash(req.password, SALT_ROUNDS);
        // Criação do usuário no repositório
        const user = await this.repository.Create({ ...req, password });

        return user;
    }

    // Método para fazer login
    Login = async (req: LoginRequest): Promise<any> => {
        // Obtém o usuário pelo e-mail
        const user = await this.repository.GetUserByEmail(req.email);
        
        // Verifica se a senha fornecida corresponde à senha armazenada no banco de dados
        const passwordMatch = await bcrypt.compare(req.password, user.password);
        if (!passwordMatch) {
            // Lança um erro se a senha for inválida
            throw "invalid email or password.";
        }

        return user;
    }

    // Método para obter informações de um usuário
    Get = async (email: string): Promise<any> => {
        // Obtém o usuário pelo e-mail
        const user = await this.repository.GetUserByEmail(email);

        return { user };
    }

    // Método para editar um usuário
    Edit = (duty: UserEditRequest): Promise<User> => {
        return this.repository.Edit(duty);
    }

    // Método para excluir um usuário
    Delete = (email: string): Promise<User> => {
        return this.repository.Delete(email);
    }

    // Método para verificar se um usuário existe
    UserExists = async (email: string): Promise<string> => {
        // Verifica se um usuário existe com o e-mail fornecido
        const user = await this.repository.GetUserByEmail(email);
        // Retorna o ID do usuário se ele existir
        return user.id;
    }
}
