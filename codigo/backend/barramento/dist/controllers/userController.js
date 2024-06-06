"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
const smartCache_1 = require("../smartCache");
// import fetch from "node-fetch";
const url = "http://10.0.140.65:8080/user";
// Controlador para operações relacionadas ao usuário
const UserController = () => {
    return {
        // Função assíncrona para criar um novo usuário
        createUser(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                // Extrair dados do corpo da requisição
                const { name, email, password } = req.body;
                try {
                    // Enviar requisição para criar um novo usuário
                    const response = yield fetch(url, {
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
                    const user = yield response.json();
                    //        try {
                    //          postCache(user);
                    //        } catch (error) {
                    //          console.error(error);
                    //        }
                    // Responder com os dados do usuário criado
                    res.json(user);
                }
                catch (error) {
                    // Em caso de erro, registrar o erro no console e enviar uma resposta de erro
                    console.error(error);
                    res.status(500).json({ error: error });
                }
            });
        },
        // Função assíncrona para fazer login
        login(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
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
                    let result = yield fetch(url + "/login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ email, password }),
                    });
                    // Extrair os dados da resposta JSON
                    const user = yield result.json();
                    // Responder com os dados do usuário criado
                    res.json(user);
                }
                catch (error) {
                    // Em caso de erro, registrar o erro no console e enviar uma resposta de erro
                    console.error(error);
                    res.status(500).json({ error: "Erro ao verificar a senha." });
                }
            });
        },
        // Função assíncrona para editar um usuário
        edit(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                // Extrair dados do corpo da requisição
                const { id, password, phone, currentBalance, currentTotalVivoFibra, currentTotalVivoMovel, planosVivoFibra, planosVivoMovel, } = req.body;
                // Obter a data e hora atual
                const updatedAt = new Date().toISOString();
                // Atualizar apenas os campos fornecidos na requisição
                const updatedFields = Object.assign({ id,
                    updatedAt }, Object.fromEntries(Object.entries(req.body).filter(([key, value]) => value !== undefined)));
                try {
                    // Enviar requisição para editar o usuário
                    let user = yield fetch(url + "/edit", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(updatedFields),
                    });
                    // Extrair os dados da resposta JSON
                    const result = yield user.json();
                    try {
                        (0, smartCache_1.postCache)(updatedFields);
                    }
                    catch (error) {
                        console.error(error);
                    }
                    // Responder com os dados do usuário criado
                    res.json(result);
                    // Responder com uma mensagem indicando que o usuário foi editado com sucesso
                }
                catch (error) {
                    // Em caso de erro, registrar o erro no console e enviar uma resposta de erro
                    console.error(error);
                    res.status(500).json({ error: "Error when editing a duty" });
                }
            });
        },
        // Função assíncrona para obter informações de um usuário
        getUser(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                // Extrair dados do corpo da requisição
                const { id } = req.body;
                try {
                    try {
                        const result = (0, smartCache_1.getCache)(id);
                        res.json(result);
                    }
                    catch (error) {
                        console.error(error);
                    }
                    const user = yield fetch(url + "/", {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ id }),
                    });
                    // Extrair os dados da resposta JSON
                    const result = yield user.json();
                    // Responder com os dados do usuário criado
                    res.json(result);
                }
                catch (error) {
                    // Em caso de erro, registrar o erro no console e enviar uma resposta de erro
                    console.error(error);
                    res.status(500).json({ error: "Error when editing a duty" });
                }
            });
        },
        getRedis(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                // Extrair dados do corpo da requisição
                const id = req.params.id;
                const client = (0, redis_1.createClient)({
                    socket: {
                        host: "clustercfg.v3vivocacheinteligente.ptlzvm.use1.cache.amazonaws.com",
                        port: 6379,
                        tls: true,
                    },
                });
                client.on("error", (err) => console.error("Redis Client Error", err));
                yield client.connect();
                console.log("Connected to Redis");
                yield client.set("grupo5", id);
                const value2 = yield client.get("grupo5");
                console.log("output ----->", value2);
                yield client.quit();
                console.log("Disconnected from Redis");
            });
        },
    };
};
// Exportar o controlador de usuário
exports.default = UserController;
//# sourceMappingURL=userController.js.map