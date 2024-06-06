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
const url = "http://10.0.136.247:8081/vivoMovel";
const vivoMovelController = () => {
    return {
        addMovel(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(req.body);
                const { saldoInternet, plano, totalSaldoInternet, diaPagamento, mesAno, userId, updatedAt } = req.body;
                try {
                    yield fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ saldoInternet, plano, totalSaldoInternet, diaPagamento, mesAno, userId, updatedAt })
                    });
                    res.json("user Created");
                }
                catch (error) {
                    console.error(error);
                    res.status(500).json({ error: 'Erro ao criar um usuário.' });
                }
            });
        },
        getMovel(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    let result = yield fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    res.json(result);
                }
                catch (error) {
                    console.error(error);
                    res.status(500).json({ error: 'Erro ao verificar a senha.' });
                }
            });
        },
        attMovel(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const { id, saldoInternet, plano, totalSaldoInternet, diaPagamento, mesAno, updatedAt } = req.body;
                const updatedFields = Object.assign({ id }, Object.fromEntries(Object.entries(req.body).filter(([key, value]) => value !== undefined)));
                try {
                    let result = yield fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ id, saldoInternet, plano, totalSaldoInternet, diaPagamento, mesAno, updatedAt })
                    });
                    res.json(result);
                }
                catch (error) {
                    console.error(error);
                    res.status(500).json({ error: 'Error when editing a duty' });
                }
            });
        },
        getMovelById(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const id = req.params.id;
                try {
                    let result = yield fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ id })
                    });
                    res.json(result);
                }
                catch (error) {
                    console.error(error);
                    res.status(500).json({ error: 'Error when editing a duty' });
                }
            });
        },
        deleteMovel(req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                const { id } = req.body;
                try {
                    yield fetch(url, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ id })
                    });
                    res.json("User deleted");
                }
                catch (error) {
                    console.error(error);
                    res.status(500).json({ error: 'Error when deleting a doctor' });
                }
            });
        }
    };
};
exports.default = vivoMovelController;
//# sourceMappingURL=vivoMovelController%20copy%202.js.map