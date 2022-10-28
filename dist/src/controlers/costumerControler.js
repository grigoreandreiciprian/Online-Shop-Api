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
exports.deleteUser = exports.updateUser = exports.addUser = exports.getAll = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const db_1 = __importDefault(require("../config/db"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const getAll = (0, express_async_handler_1.default)(((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield db_1.default.models.Customer.findAll();
    res.status(200).json(users);
})));
exports.getAll = getAll;
const addUser = (0, express_async_handler_1.default)(((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPasword = bcrypt_1.default.hashSync(req.body.password, 10);
    const user = {
        id: req.body.id,
        email: req.body.email,
        password: hashedPasword,
        fullName: req.body.fullName,
        billingAddress: req.body.billingAddress,
        country: req.body.country,
        phone: req.body.phone
    };
    yield db_1.default.models.Customer.create(user);
    res.status(200).end();
})));
exports.addUser = addUser;
const updateUser = (0, express_async_handler_1.default)(((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    let user = yield db_1.default.models.Customer.findByPk(id);
    if (user) {
        user.set(req.body);
        user.save();
    }
    res.status(200).end();
})));
exports.updateUser = updateUser;
const deleteUser = (0, express_async_handler_1.default)(((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    let user = yield db_1.default.models.Customer.findByPk(id);
    if (user) {
        user.destroy();
        user.save();
    }
    res.status(200).end();
})));
exports.deleteUser = deleteUser;
//# sourceMappingURL=costumerControler.js.map