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
exports.deleteDetail = exports.UpdateDetails = exports.addDetails = exports.getAll = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const db_1 = __importDefault(require("../config/db"));
const getAll = (0, express_async_handler_1.default)(((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const details = yield db_1.default.models.OrderDetails.findAll();
    res.status(200).json(details);
})));
exports.getAll = getAll;
const addDetails = (0, express_async_handler_1.default)(((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const detail = req.body;
    console.log(detail);
    yield db_1.default.models.OrderDetails.create(detail);
    res.status(200).end();
})));
exports.addDetails = addDetails;
const UpdateDetails = (0, express_async_handler_1.default)(((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    let detail = yield db_1.default.models.OrderDetails.findByPk(id);
    if (detail) {
        detail.set(req.body);
        detail.save();
    }
    res.status(200).end();
})));
exports.UpdateDetails = UpdateDetails;
const deleteDetail = (0, express_async_handler_1.default)(((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    let detail = yield db_1.default.models.OrderDetails.findByPk(id);
    if (detail) {
        detail.destroy();
        detail.save();
    }
    res.status(200).end();
})));
exports.deleteDetail = deleteDetail;
//# sourceMappingURL=orderDetails.js.map