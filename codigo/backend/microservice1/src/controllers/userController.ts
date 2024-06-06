import { Request, Response } from "express";
import { UserService } from "@modules/user/service";
import { RegisterRequest, UserEditRequest } from "@modules/user/dtos";

// Controlador de Usuário que lida com as requisições relacionadas aos usuários
const UserController = (service: UserService) => {
  return {
    // Função assíncrona para criar um novo usuário
    async createUser(req: Request, res: Response) {
      // Extrair dados do corpo da requisição
      const { name, email, password } = req.body;

      try {
        // Chamar o serviço para registrar um novo usuário
        let user = await service.Register({ name, email, password });
        // Responder com uma mensagem indicando que o usuário foi criado com sucesso
        res.json(user);
      } catch (error) {
        // Em caso de erro, registrar o erro no console e enviar uma resposta de erro
        console.error(error);
        res.status(500).json({ error: "Erro ao criar um usuário." });
      }
    },

    // Função assíncrona para fazer login
    async login(req: Request, res: Response) {
      // Extrair dados do corpo da requisição
      const { email, password } = req.body;

      try {
        // Chamar o serviço para fazer login
        let result = await service.Login({ email, password });
        // Responder com o resultado do login
        res.json(result);
      } catch (error) {
        // Em caso de erro, registrar o erro no console e enviar uma resposta de erro
        console.error(error);
        res.status(500).json({ error: "Erro ao verificar a senha." });
      }
    },

    // Função assíncrona para editar um usuário existente
    async edit(req: Request, res: Response) {
      // Extrair dados do corpo da requisição
      const {
        email,
        password,
        phone,
        currentBalance,
        currentTotalVivoFibra,
        currentTotalVivoMovel,
        planosVivoFibra,
        planosVivoMovel,
      } = req.body;
      const updatedAt = new Date().toISOString();

      // Construir os campos atualizados do usuário
      const updatedFields: UserEditRequest = {
        email,
        updatedAt,
        ...Object.fromEntries(
          Object.entries(req.body).filter(([key, value]) => value !== undefined)
        ),
      };

      try {
        // Chamar o serviço para editar o usuário
        let user = await service.Edit(updatedFields);
        // Responder com uma mensagem indicando que o usuário foi editado com sucesso
        res.json(user);
      } catch (error) {
        // Em caso de erro, registrar o erro no console e enviar uma resposta de erro
        console.error(error);
        res.status(500).json({ error: "Error when editing a duty" });
      }
    },

    // Função assíncrona para obter informações de um usuário
    async getUser(req: Request, res: Response) {
      // Extrair dados do corpo da requisição
      const { email } = req.body;

      try {
        // Chamar o serviço para obter informações do usuário
        const user = await service.Get(email);
        // Responder com as informações do usuário
        res.json(user);
      } catch (error) {
        // Em caso de erro, registrar o erro no console e enviar uma resposta de erro
        console.error(error);
        res.status(500).json({ error: "Error when editing a duty" });
      }
    },

    // Função assíncrona para excluir um usuário
    async delete(req: Request, res: Response) {
      // Extrair dados do corpo da requisição
      const { email } = req.body;

      try {
        // Chamar o serviço para excluir o usuário
        await service.Delete(email);
        // Responder com uma mensagem indicando que o usuário foi excluído com sucesso
        res.json("User deleted");
      } catch (error) {
        // Em caso de erro, registrar o erro no console e enviar uma resposta de erro
        console.error(error);
        res.status(500).json({ error: "Error when deleting a doctor" });
      }
    },
  };
};

export default UserController;
