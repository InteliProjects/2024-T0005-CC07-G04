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
exports.postCache = exports.getCache = void 0;
const redis_1 = require("redis");
const redisClient = (0, redis_1.createClient)({
    socket: {
        host: "clustercfg.v3vivocacheinteligente.ptlzvm.use1.cache.amazonaws.com",
        port: 6379,
        tls: true,
    },
});
function getCache(id) {
    return __awaiter(this, void 0, void 0, function* () {
        redisClient.on("error", (err) => console.error("Redis Client Error", err));
        yield redisClient.connect();
        console.log("Connected to Redis");
        const data = yield redisClient.get(id);
        const name2 = data.split(" ")[0];
        const email2 = data.split(" ")[1];
        const counter2 = parseInt(data.split(" ")[2]) + 1;
        yield redisClient.set(id, `${name2} ${email2} ${counter2} `);
        console.log("pegando do cache");
        console.log("olha a data ----->>>", data);
        yield redisClient.quit();
        console.log("Disconnected from Redis");
        return data;
    });
}
exports.getCache = getCache;
function postCache(data) {
    return __awaiter(this, void 0, void 0, function* () {
        redisClient.on("error", (err) => console.error("Redis Client Error", err));
        yield redisClient.connect();
        console.log("Connected to Redis");
        //TODO: Pegar objeto, nao id
        const name2 = data.name;
        const email2 = data.email;
        yield redisClient.set(email2, `${name2} ${email2} 1`);
        console.log("Disconnected from Redis");
        yield redisClient.quit();
    });
}
exports.postCache = postCache;
function clearCacheIfNecessary() {
    const totalCounter = calculateTotalCounter();
    if (totalCounter > 10000) {
        clearLeastProbableData();
    }
}
function calculateTotalCounter() {
    let totalCounter = 0;
    redisClient.keys('*_counter', (err, keys) => {
        if (err) {
            console.error('Erro ao obter chaves do banco de dados:', err);
            return;
        }
        keys.forEach((key) => {
            redisClient.get(key, (err, counterValue) => {
                if (err) {
                    console.error('Erro ao obter valor do contador:', err);
                    return;
                }
                totalCounter += parseInt(counterValue);
            });
        });
    });
    return totalCounter;
}
function clearLeastProbableData() {
    let minProbability = Infinity;
    let leastProbableId = '';
    updateProbabilities();
    redisClient.keys('*', (err, keys) => {
        if (err) {
            console.error('Erro ao obter chaves do banco de dados:', err);
            return;
        }
        keys.forEach((key) => {
            if (key.endsWith('_probability')) {
                const id = key.slice(0, -12);
                const probability = parseFloat(redisClient.get(key) || '0');
                if (probability < minProbability) {
                    minProbability = probability;
                    leastProbableId = id;
                }
            }
        });
        if (leastProbableId !== '') {
            redisClient.del(leastProbableId);
            redisClient.del(leastProbableId + '_probability');
        }
    });
}
function updateProbabilities() {
    const globalMean = calculateGlobalMean();
    const globalVariance = calculateGlobalVariance(globalMean);
    redisClient.keys('*_counter', (err, keys) => {
        if (err) {
            console.error('Erro ao obter chaves do banco de dados:', err);
            return;
        }
        keys.forEach((key) => {
            const id = key.slice(0, -8); // Remove '_counter' from the key to get the id
            // Get the counter value
            redisClient.get(key, (err, counterValue) => {
                if (err) {
                    console.error('Erro ao obter valor do contador:', err);
                    return;
                }
                const counter = parseInt(counterValue || '0');
                // Calculate and update probability using the global mean and variance
                const probability = gaussianProbability(counter, globalMean, globalVariance);
                redisClient.set(id + '_probability', probability.toString());
            });
        });
    });
}
function calculateGlobalMean() {
    let totalCounter = 0;
    let totalCount = 0;
    redisClient.keys('*_counter', (err, keys) => {
        if (err) {
            console.error('Erro ao obter chaves do banco de dados:', err);
            return;
        }
        keys.forEach((key) => {
            // Obter o valor do contador para esta linha
            redisClient.get(key, (err, counterValue) => {
                if (err) {
                    console.error('Erro ao obter valor do contador:', err);
                    return;
                }
                // Somar o valor do contador ao total
                totalCounter += parseInt(counterValue || '0');
                // Incrementar o contador de linhas
                totalCount++;
            });
        });
    });
    // Calcular a média global
    if (totalCount > 0) {
        return totalCounter / totalCount;
    }
    else {
        return 0; // Caso não haja linhas no banco de dados
    }
}
function calculateGlobalVariance(globalMean) {
    let sumSquaredDifferences = 0;
    let totalCount = 0;
    redisClient.keys('*_counter', (err, keys) => {
        if (err) {
            console.error('Erro ao obter chaves do banco de dados:', err);
            return;
        }
        keys.forEach((key) => {
            redisClient.get(key, (err, counterValue) => {
                if (err) {
                    console.error('Erro ao obter valor do contador:', err);
                    return;
                }
                const counter = parseInt(counterValue || '0');
                const difference = counter - globalMean;
                sumSquaredDifferences += Math.pow(difference, 2);
                totalCount++;
            });
        });
    });
    if (totalCount > 0) {
        return sumSquaredDifferences / totalCount;
    }
    else {
        return 0;
    }
}
function gaussianProbability(x, mean, variance) {
    const exponent = -Math.pow(x - mean, 2) / (2 * variance);
    const coefficient = 1 / (Math.sqrt(2 * Math.PI * variance));
    return coefficient * Math.exp(exponent);
}
//# sourceMappingURL=smartCache.js.map