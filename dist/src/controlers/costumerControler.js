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
exports.uploadPhoto = exports.logIn = exports.deleteUser = exports.updateUser = exports.addUser = exports.getAll = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const db_1 = __importDefault(require("../config/db"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const utils_1 = __importDefault(require("../utils/utils"));
const getAll = (0, express_async_handler_1.default)(((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield db_1.default.models.Customer.findAll();
    res.status(200).json(users);
})));
exports.getAll = getAll;
const addUser = (0, express_async_handler_1.default)(((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPasword = bcrypt_1.default.hashSync(req.body.password, 10);
    const users = yield db_1.default.models.Customer.findAll();
    const user = {
        id: req.body.id,
        email: req.body.email,
        password: hashedPasword,
        fullName: req.body.fullName,
        streetAdress: req.body.streetAdress,
        province: req.body.province,
        city: req.body.city,
        postalCode: req.body.postalCode,
        country: req.body.country,
        phone: req.body.phone
    };
    let validUser = yield db_1.default.models.Customer.findOne({ where: { email: `${user.email}` } });
    let validPhone = yield db_1.default.models.Customer.findOne({ where: { phone: `${user.phone}` } });
    if (validUser) {
        res.status(400).end();
    }
    else if (validPhone) {
        res.status(401).end();
    }
    else {
        yield db_1.default.models.Customer.create(user);
        res.status(200).end();
    }
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
const logIn = (0, express_async_handler_1.default)(((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let obj = req.body;
    let user = yield db_1.default.models.Customer.findOne({ where: { email: `${obj.email}` } });
    console.log(user.getDataValue("password"));
    if (user) {
        let authentificate = bcrypt_1.default.compareSync(obj.password, user.getDataValue("password"));
        if (authentificate) {
            res.status(200).json({
                id: user.getDataValue("id"),
                token: (0, utils_1.default)(user.getDataValue("id"))
            });
        }
    }
    else {
        res.status(401);
        throw new Error("Parola gresita!");
    }
})));
exports.logIn = logIn;
const uploadPhoto = (0, express_async_handler_1.default)(((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    let user = yield db_1.default.models.Customer.findByPk(id);
    if (user) {
        user.set({
        // picture: req.body,
        });
        user.save();
    }
    res.status(200).send("upload succes");
})));
exports.uploadPhoto = uploadPhoto;
//# sourceMappingURL=costumerControler.js.map