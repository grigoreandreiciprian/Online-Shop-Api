"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Costumers_1 = __importDefault(require("../Costumers"));
const OrderDetails_1 = __importDefault(require("../OrderDetails"));
const Orders_1 = __importDefault(require("../Orders"));
const Products_1 = __importDefault(require("../Products"));
const dbInit = () => Promise.all([
    Costumers_1.default.sync(),
    OrderDetails_1.default.sync(),
    Orders_1.default.sync(),
    Products_1.default.sync(),
]);
exports.default = dbInit;
//# sourceMappingURL=init.js.map