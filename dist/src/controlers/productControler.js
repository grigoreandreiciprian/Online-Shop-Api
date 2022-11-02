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
exports.uploadPhoto = exports.deleteProduct = exports.updateProduct = exports.addProduct = exports.getProducts = void 0;
const db_1 = __importDefault(require("../config/db"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const getProducts = (0, express_async_handler_1.default)(((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let books = yield db_1.default.models.Product.findAll();
    res.status(200).json(books);
})));
exports.getProducts = getProducts;
const addProduct = (0, express_async_handler_1.default)(((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let product = req.body;
    yield db_1.default.models.Product.create(product);
    res.status(200).end();
})));
exports.addProduct = addProduct;
const updateProduct = (0, express_async_handler_1.default)(((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    const product = yield db_1.default.models.Product.findByPk(id);
    if (product) {
        product.set(req.body);
        product.save();
    }
    res.status(200).end();
})));
exports.updateProduct = updateProduct;
const deleteProduct = (0, express_async_handler_1.default)(((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    const product = yield db_1.default.models.Product.findByPk(id);
    if (product) {
        product.destroy();
        product.save();
    }
    res.status(200).end();
})));
exports.deleteProduct = deleteProduct;
const uploadPhoto = (0, express_async_handler_1.default)(((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    let product = yield db_1.default.models.Product.findByPk(id);
    if (product) {
        product.set({
            picture: req.body,
        });
        product.save();
    }
    res.status(200).send("upload succes");
})));
exports.uploadPhoto = uploadPhoto;
//# sourceMappingURL=productControler.js.map