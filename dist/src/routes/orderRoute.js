"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const ordersControler_1 = require("../controlers/ordersControler");
const errorHandler_1 = __importDefault(require("../midleware/errorHandler"));
router.route("/").get(ordersControler_1.getOrders, errorHandler_1.default);
router.route("/").post(ordersControler_1.addOrder, errorHandler_1.default);
router.route("/:id").put(ordersControler_1.updateOrder, errorHandler_1.default);
router.route("/:id").delete(ordersControler_1.deleteOrder, errorHandler_1.default);
exports.default = router;
//# sourceMappingURL=orderRoute.js.map