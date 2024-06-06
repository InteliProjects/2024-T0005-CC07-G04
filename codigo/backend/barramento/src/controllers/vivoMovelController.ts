import { Request, Response } from "express";

const url = "http://10.0.133.17:8081/vivoMovel";

// Controlador para operações relacionadas ao Vivo Móvel
const vivoMovelController = () => {
  return {
    // Função assíncrona para adicionar informações do Vivo Móvel
    async addMovel(req: Request, res: Response) {
      // Log dos dados recebidos na requisição (para fins de depuração)
      console.log(req.body);

      // Extrair dados do corpo da requisição
      const {
        saldoInternet,
        plano,
        valorFatura,
        valorCredito,
        totalSaldoInternet,
        diaPagamento,
        mesAno,
        userId,
        updatedAt,
      } = req.body;

      try {
        // Enviar requisição para adicionar informações do Vivo Móvel
        await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            saldoInternet,
            plano,
            valorFatura,
            valorCredito,
            totalSaldoInternet,
            diaPagamento,
            mesAno,
            userId,
            updatedAt,
          }),
        });

        // Responder com uma mensagem indicando que as informações foram adicionadas com sucesso
        res.json("user Created");
      } catch (error) {
        // Em caso de erro, registrar o erro no console e enviar uma resposta de erro
        console.error(error);
        res.status(500).json({ error: "Erro ao criar um usuário." });
      }
    },

    // Função assíncrona para obter informações do Vivo Móvel
    async getMovel(req: Request, res: Response) {
      try {
        // Enviar requisição para obter informações do Vivo Móvel
        let response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        // Verificar se a resposta é bem-sucedida
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Converter a resposta em JSON
        let result = await response.json();

        // Envie o resultado como resposta
        res.json(result);
      } catch (error) {
        // Em caso de erro, registrar o erro no console e enviar uma resposta de erro
        console.error(error);
        res.status(500).json({ error: "Erro ao verificar a senha." });
      }
    },

    // Função assíncrona para atualizar informações do Vivo Móvel
    async attMovel(req: Request, res: Response) {
      // Extrair dados do corpo da requisição
      const {
        id,
        saldoInternet,
        plano,
        valorFatura,
        valorCredito,
        totalSaldoInternet,
        diaPagamento,
        mesAno,
        userId,
        updatedAt,
      } = req.body;

      // Atualizar apenas os campos fornecidos na requisição
      const updatedFields = {
        id,
        ...Object.fromEntries(
          Object.entries(req.body).filter(([key, value]) => value !== undefined)
        ),
      };

      try {
        // Enviar requisição para atualizar informações do Vivo Móvel
        let result = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
            saldoInternet,
            plano,
            valorFatura,
            valorCredito,
            totalSaldoInternet,
            diaPagamento,
            mesAno,
            userId,
            updatedAt,
          }),
        });

        // Responder com o resultado da requisição
        res.json(result);
      } catch (error) {
        // Em caso de erro, registrar o erro no console e enviar uma resposta de erro
        console.error(error);
        res.status(500).json({ error: "Error when editing a duty" });
      }
    },

    // Função assíncrona para obter informações do Vivo Móvel por ID
    async getMovelById(req: Request, res: Response) {
      // Extrair o ID do parâmetro da requisição
      const id = req.params.id;

      try {
        // Adiciona o ID como um parâmetro de consulta na URL
        let result = await fetch(`${url}/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        // Verificar se a resposta é bem-sucedida
        if (!result.ok) {
          throw new Error(`HTTP error! Status: ${result.status}`);
        }

        // Converter a resposta em JSON
        let data = await result.json();

        // Envie o resultado como resposta
        res.json(data);
      } catch (error) {
        // Em caso de erro, registrar o erro no console e enviar uma resposta de erro
        console.error(error);
        res.status(500).json({ error: "Error when editing a duty" });
      }
    },

    // Função assíncrona para excluir informações do Vivo Móvel por ID
    async deleteMovel(req: Request, res: Response) {
      // Extrair o ID do parâmetro da requisição
      const id = req.params.id;

      try {
        // Enviar requisição para excluir informações do Vivo Móvel pelo ID
        await fetch(`${url}/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

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

// Exportar o controlador do Vivo Móvel
export default vivoMovelController;
