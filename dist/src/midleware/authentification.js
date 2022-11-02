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
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = __importDefault(require("../config/db"));
const protect = (0, express_async_handler_1.default)(((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let token;
    console.log("Intra in protect");
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            console.log("aici");
            token = req.headers.authorization.split(" ")[1];
            const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
            const user = yield db_1.default.models.Customer.findByPk(decoded.id);
            next();
        }
        catch (e) {
            throw new Error("No authorizion ,toke failed");
            res.status(401);
        }
    }
    if (!token) {
        console.log("err");
        throw new Error("No authorization, no token");
    }
})));
exports.default = protect;
//# sourceMappingURL=authentification.js.map