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
// import fetch from "node-fetch";
// Controlador para operações relacionadas ao usuário
const cacheControler = () => {
    return {
        // Função assíncrona para criar um novo usuário
        getRedis(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                // Extrair dados do corpo da requisição
                const { email } = req.body;
                const client = (0, redis_1.createClient)({
                    url: 'clustercfg.v3vivocacheinteligente.ptlzvm.use1.cache.amazonaws.com:6379'
                });
                client.on('error', err => console.log('Redis Client Error', err));
                yield client.connect();
                yield client.set('key', 'value');
                const value = yield client.get('key');
                console.log("value aqui------->>>>>", value);
            });
        },
    };
};
// Exportar o controlador de usuário
exports.default = cacheControler;
//# sourceMappingURL=cacheRouter.js.map