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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ioredis_1 = __importDefault(require("ioredis"));
const app = (0, express_1.default)();
const port = 8079;
const redis = new ioredis_1.default({
    host: "clustercfg.v3vivocacheinteligente.ptlzvm.use1.cache.amazonaws.com",
    port: 6379,
});
app.use(express_1.default.json());
// app.get("/oi", async (req, res) => {
//     res.send("Hello Redis with Express.js and TypeScript!");
// });
app.get("/cache", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cachedData = yield redis.get("cachedData");
    if (cachedData) {
        res.send(JSON.parse(cachedData));
    }
    else {
        const dataToCache = { message: "Data to be cached" };
        yield redis.set("cachedData", JSON.stringify(dataToCache), "EX", 3600);
        res.send(dataToCache);
    }
}));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
exports.default = app;
//# sourceMappingURL=routeRedis.js.map