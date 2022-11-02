"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const ordersControler_1 = require("../controlers/ordersControler");
const errorHandler_1 = __importDefault(require("../midleware/errorHandler"));
const authentification_1 = __importDefault(require("../midleware/authentification"));
router.route("/").get(authentification_1.default, ordersControler_1.getOrders, errorHandler_1.default);
router.route("/").post(authentification_1.default, ordersControler_1.addOrder, errorHandler_1.default);
router.route("/:id").put(authentification_1.default, ordersControler_1.updateOrder, errorHandler_1.default);
router.route("/:id").delete(authentification_1.default, ordersControler_1.deleteOrder, errorHandler_1.default);
exports.default = router;
//# sourceMappingURL=orderRoute.js.map