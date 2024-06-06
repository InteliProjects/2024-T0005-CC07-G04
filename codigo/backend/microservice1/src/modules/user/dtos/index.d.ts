import { User } from "@modules/user/entities";

// Define o tipo de requisição para o login
export type LoginRequest = {
    email: string,
    password: string
}

// Define o tipo de resposta para o login
export type LoginResponse = {
    token: string
}

// Define o tipo de requisição para o registro de um novo usuário
export type RegisterRequest = {
    email: string,
    name: string,
    password: string,
}

// Define o tipo de requisição para a edição de um usuário existente
export type UserEditRequest = {
    updatedAt: string,
    name?: string,
    email: string,
    password?: string,
    phone?: string,
    currentBalance?: number,
    currentTotalVivoFibra?: number,
    currentTotalVivoMovel?: number,
    planosVivoFibra?: string[],
    planosVivoMovel?: string[]
}

// Define a interface para o objeto de transferência de dados do usuário, excluindo a senha
export interface UserDTO extends Omit<User, 'password'> { }
