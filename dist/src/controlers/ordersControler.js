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
exports.deleteOrder = exports.updateOrder = exports.addOrder = exports.getOrders = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const db_1 = __importDefault(require("../config/db"));
const getOrders = (0, express_async_handler_1.default)(((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield db_1.default.models.Order.findAll();
    res.status(200).json(orders);
})));
exports.getOrders = getOrders;
const addOrder = (0, express_async_handler_1.default)(((req, res, nex) => __awaiter(void 0, void 0, void 0, function* () {
    //logica?
    const user = req.user;
    const cart = req.body;
    const order = {
        ammount: 1,
        orderEmail: user.email,
        shippingAdress: user.streetAdress,
        orderDate: "10/28/2021",
        orderStatus: "true",
        customer_id: user.id
    };
    let or = yield db_1.default.models.Order.create(order);
    cart.forEach((e) => __awaiter(void 0, void 0, void 0, function* () {
        const product = yield db_1.default.models.Product.findByPk(e.id);
        const details = {
            order_id: or.get().id,
            product_id: e.id,
            quantity: e.quantity,
            price: e.quantity
        };
        yield db_1.default.models.OrderDetails.create(details);
    }));
    yield db_1.default.models.Order.create(order);
    res.status(200).end();
})));
exports.addOrder = addOrder;
const updateOrder = (0, express_async_handler_1.default)(((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    const order = yield db_1.default.models.Order.findByPk(id);
    if (order) {
        order.set(req.body);
        order.save();
    }
    res.status(200).end();
})));
exports.updateOrder = updateOrder;
const deleteOrder = (0, express_async_handler_1.default)(((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    const order = yield db_1.default.models.Order.findByPk(id);
    if (order) {
        order.destroy();
        order.save();
    }
    res.status(200).end();
})));
exports.deleteOrder = deleteOrder;
//# sourceMappingURL=ordersControler.js.map