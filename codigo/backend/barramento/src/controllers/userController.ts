import { Request, Response } from "express";
import { createClient } from "redis";
import { getCache, postCache } from "smartCache";
// import fetch from "node-fetch";

const url = "http://10.0.129.210:8080/user";

// Controlador para operações relacionadas ao usuário
const UserController = () => {
  return {
    // Função assíncrona para criar um novo usuário
    async createUser(req: Request, res: Response) {
      // Extrair dados do corpo da requisição
      const { name, email, password } = req.body;

      try {
        // Enviar requisição para criar um novo usuário
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        });

        // Verificar se a requisição foi bem-sucedida
        if (!response.ok) {
          throw new Error("Erro ao criar um usuário.");
        }

        // Extrair os dados da resposta JSON
        const user = await response.json();

//        try {
//          postCache(user);
//        } catch (error) {
//          console.error(error);
//        }

        // Responder com os dados do usuário criado
        res.json(user);
      } catch (error) {
        // Em caso de erro, registrar o erro no console e enviar uma resposta de erro
        console.error(error);
        res.status(500).json({ error: error });
      }
    },
    // Função assíncrona para fazer login
    async login(req: Request, res: Response) {
      // Extrair dados do corpo da requisição
      const { email, password } = req.body;

//    try {
//      const responseCache = getCache(email);
//	res.json({data:responseCache});
//      } catch (error) {
//        console.error(error);
//      }

      try {
        // Enviar requisição para fazer login
        let result = await fetch(url + "/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        // Extrair os dados da resposta JSON
        const user = await result.json();

        // Responder com os dados do usuário criado
        res.json(user);
      } catch (error) {
        // Em caso de erro, registrar o erro no console e enviar uma resposta de erro
        console.error(error);
        res.status(500).json({ error: "Erro ao verificar a senha." });
      }
    },

    // Função assíncrona para editar um usuário
    async edit(req: Request, res: Response) {
      // Extrair dados do corpo da requisição
      const {
        id,
        password,
        phone,
        currentBalance,
        currentTotalVivoFibra,
        currentTotalVivoMovel,
        planosVivoFibra,
        planosVivoMovel,
      } = req.body;

      // Obter a data e hora atual
      const updatedAt = new Date().toISOString();

      // Atualizar apenas os campos fornecidos na requisição
      const updatedFields = {
        id,
        updatedAt,
        ...Object.fromEntries(
          Object.entries(req.body).filter(([key, value]) => value !== undefined)
        ),
      };

      try {
        // Enviar requisição para editar o usuário
        let user = await fetch(url + "/edit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedFields),
        });

        // Extrair os dados da resposta JSON
        const result = await user.json();

        try {
          postCache(updatedFields);
        } catch (error) {
          console.error(error);
        }

        // Responder com os dados do usuário criado
        res.json(result);

        // Responder com uma mensagem indicando que o usuário foi editado com sucesso
      } catch (error) {
        // Em caso de erro, registrar o erro no console e enviar uma resposta de erro
        console.error(error);
        res.status(500).json({ error: "Error when editing a duty" });
      }
    },

    // Função assíncrona para obter informações de um usuário
    async getUser(req: Request, res: Response) {
      // Extrair dados do corpo da requisição
      const { id } = req.body;

      try {
        try {
          const result = getCache(id);
          res.json(result);
        } catch (error) {
          console.error(error);
        }

        const user = await fetch(url + "/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        });

        // Extrair os dados da resposta JSON
        const result = await user.json();


        // Responder com os dados do usuário criado
        res.json(result);
      } catch (error) {
        // Em caso de erro, registrar o erro no console e enviar uma resposta de erro
        console.error(error);
        res.status(500).json({ error: "Error when editing a duty" });
      }
    },
    async getRedis(req: Request, res: Response) {
      // Extrair dados do corpo da requisição
      const id = req.params.id;

      const client = createClient({
        socket: {
          host: "clustercfg.v3vivocacheinteligente.ptlzvm.use1.cache.amazonaws.com",
          port: 6379,
          tls: true,
        },
      });

      client.on("error", (err) => console.error("Redis Client Error", err));

      await client.connect();
      console.log("Connected to Redis");

      await client.set("grupo5", id);
      const value2 = await client.get("grupo5");
      console.log("output ----->", value2);

      await client.quit();
      console.log("Disconnected from Redis");
    },
  };
};

// Exportar o controlador de usuário
export default UserController;
