"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Costumers_1 = __importDefault(require("../models/Costumers"));
const OrderDetails_1 = __importDefault(require("../models/OrderDetails"));
const Order_1 = __importDefault(require("../models/Order"));
const Product_1 = __importDefault(require("../models/Product"));
const dbInit = () => Promise.all([
    Costumers_1.default.sync(),
    OrderDetails_1.default.sync(),
    Order_1.default.sync(),
    Product_1.default.sync(),
]);
exports.default = dbInit;
//# sourceMappingURL=init.js.map