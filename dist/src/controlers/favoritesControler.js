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
exports.deleteFavorite = exports.addToFavorite = exports.getAll = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const db_1 = __importDefault(require("../config/db"));
const getAll = (0, express_async_handler_1.default)(((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield db_1.default.models.Favorite.findAll();
    res.status(200).json(items);
})));
exports.getAll = getAll;
const addToFavorite = (0, express_async_handler_1.default)(((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const item = req.body;
    yield db_1.default.models.Favorite.create(item);
    res.status(200).end();
})));
exports.addToFavorite = addToFavorite;
const deleteFavorite = (0, express_async_handler_1.default)(((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    const product = yield db_1.default.models.Favorite.findByPk(id);
    if (product) {
        product.destroy();
        product.save();
    }
    res.status(200).end();
})));
exports.deleteFavorite = deleteFavorite;
//# sourceMappingURL=favoritesControler.js.map