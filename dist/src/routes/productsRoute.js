"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const productControler_1 = require("../controlers/productControler");
const errorHandler_1 = __importDefault(require("../midleware/errorHandler"));
router.route("/").get(productControler_1.getProducts, errorHandler_1.default);
router.route("/").post(productControler_1.addProduct, errorHandler_1.default);
router.route("/:id").put(productControler_1.updateProduct, errorHandler_1.default);
router.route("/:id").delete(productControler_1.deleteProduct, errorHandler_1.default);
exports.default = router;
//# sourceMappingURL=productsRoute.js.map