"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orderDetails_1 = require("../controlers/orderDetails");
const errorHandler_1 = __importDefault(require("../midleware/errorHandler"));
const router = express_1.default.Router();
router.route("/").get(orderDetails_1.getAll, errorHandler_1.default);
router.route("/").post(orderDetails_1.addDetails, errorHandler_1.default);
router.route("/:id").put(orderDetails_1.UpdateDetails, errorHandler_1.default);
router.route("/:id").delete(orderDetails_1.deleteDetail, errorHandler_1.default);
exports.default = router;
//# sourceMappingURL=orderDetailsRoute.js.map