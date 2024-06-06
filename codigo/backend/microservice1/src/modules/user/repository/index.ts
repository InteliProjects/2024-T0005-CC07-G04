import { User } from "../entities"; // Importa o modelo de usuário
import { PrismaClient } from "@prisma/client"; // Importa o cliente Prisma
import { RegisterRequest } from "../dtos"; // Importa o tipo de requisição de registro
import { UserEditRequest } from '@modules/user/dtos'; // Importa o tipo de requisição de edição do usuário

// Interface que define o contrato para o repositório de usuário
export type IUserRepository = {
    Create(user: RegisterRequest): Promise<User>; // Método para criar um usuário
    GetUserByEmail(email: string): Promise<User>; // Método para obter um usuário pelo e-mail
    Edit(user: UserEditRequest): Promise<User>; // Método para editar um usuário
    Delete(email: string): Promise<User>; // Método para excluir um usuário
}

// Implementação concreta do repositório de usuário usando o Prisma
export class PrismaUserRepository implements IUserRepository {
    prisma: PrismaClient; // Cliente Prisma

    // Construtor que recebe uma instância do cliente Prisma
    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
    }

    // Método para criar um usuário
    Create = async (user: RegisterRequest): Promise<User> => {
        return await this.prisma.user.create({ data: user });
    }

    // Método para obter um usuário pelo e-mail
    GetUserByEmail = async (email: string): Promise<User> => {
        return await this.prisma.user.findUniqueOrThrow({ where: { email } });
    }

    // Método para editar um usuário
    Edit = (user: UserEditRequest): Promise<User> => {
        return this.prisma.user.update({ where: { email: user.email }, data: user });
    }

    // Método para excluir um usuário
    Delete = (email: string): Promise<User> => {
        return this.prisma.user.delete({ where: { email } });
    }
}
