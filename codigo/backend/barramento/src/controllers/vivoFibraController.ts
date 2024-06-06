import { Request, Response } from "express";

const url = "http://10.0.140.29:8082/vivoFibra";

// Controlador para operações relacionadas ao Vivo Fibra
const vivoFibraController = () => {
  return {
    // Função assíncrona para adicionar informações do Vivo Fibra
    async addFibra(req: Request, res: Response) {
      // Extrair dados do corpo da requisição
      const {
        saldoInternet,
        totalSaldoInternet,
        valorFatura,
        plano,
        mesAno,
        updatedAt,
        userId,
      } = req.body;

      try {
        // Enviar requisição para adicionar informações do Vivo Fibra
        const result = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            saldoInternet,
            totalSaldoInternet,
            valorFatura,
            plano,
            mesAno,
            updatedAt,
            userId,
          }),
        });

        // Verificar se a requisição foi bem-sucedida
        if (!result.ok) return res.status(400).send("Erro ao adicionar fibra");

        // Responder com uma mensagem indicando que as informações foram adicionadas com sucesso
        res.json("user Created");
      } catch (error) {
        // Em caso de erro, registrar o erro no console e enviar uma resposta de erro
        console.error(error);
        res.status(500).json({ error: "Erro ao criar um usuário." });
      }
    },

    // Função assíncrona para obter informações do Vivo Fibra
    async getFibra(req: Request, res: Response) {
      try {
        // Enviar requisição para obter informações do Vivo Fibra
        let response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        // Verificar se a requisição foi bem-sucedida
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Converter a resposta em JSON
        let result = await response.json();

        // Responder com as informações obtidas
        res.json(result);
      } catch (error) {
        // Em caso de erro, registrar o erro no console e enviar uma resposta de erro
        console.error(error);
        res.status(500).json({ error: "Erro ao verificar a senha." });
      }
    },

    // Função assíncrona para atualizar informações do Vivo Fibra
    async attFibra(req: Request, res: Response) {
      // Extrair dados do corpo da requisição
      const {
        id,
        saldoInternet,
        totalSaldoInternet,
        valorFatura,
        plano,
        mesAno,
        updatedAt,
        userId,
      } = req.body;

      // Atualizar apenas os campos fornecidos na requisição
      const updatedFields = {
        id,
        ...Object.fromEntries(
          Object.entries(req.body).filter(([key, value]) => value !== undefined)
        ),
      };

      try {
        // Enviar requisição para atualizar informações do Vivo Fibra
        let result = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedFields),
        });

        // Responder com o resultado da requisição
        res.json(result);
      } catch (error) {
        // Em caso de erro, registrar o erro no console e enviar uma resposta de erro
        console.error(error);
        res.status(500).json({ error: "Error when editing a duty" });
      }
    },

    // Função assíncrona para obter informações do Vivo Fibra por ID
    async getFibraById(req: Request, res: Response) {
      // Extrair o ID do parâmetro da requisição
      const id = req.params.id;
      console.log(id); // Log do ID para depuração

      try {
        // Enviar requisição para obter informações do Vivo Fibra pelo ID
        let result = await fetch(`${url}/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        // Verificar se a requisição foi bem-sucedida
        if (!result.ok) {
          throw new Error(`HTTP error! Status: ${result.status}`);
        }

        // Converter a resposta em JSON
        let data = await result.json();

        // Responder com as informações obtidas
        res.json(data);
      } catch (error) {
        // Em caso de erro, registrar o erro no console e enviar uma resposta de erro
        console.error(error);
        res.status(500).json({ error: "Error when editing a duty" });
      }
    },

    // Função assíncrona para excluir informações do Vivo Fibra por ID
    async deleteFibra(req: Request, res: Response) {
      // Extrair o ID do parâmetro da requisição
      const id = req.params.id;

      try {
        // Enviar requisição para excluir informações do Vivo Fibra pelo ID
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

// Exportar o controlador do Vivo Fibra
export default vivoFibraController;
