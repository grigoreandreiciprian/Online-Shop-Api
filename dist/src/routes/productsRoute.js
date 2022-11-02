"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const productControler_1 = require("../controlers/productControler");
const errorHandler_1 = __importDefault(require("../midleware/errorHandler"));
const authentification_1 = __importDefault(require("../midleware/authentification"));
const body_parser_1 = __importDefault(require("body-parser"));
router.route("/").get(authentification_1.default, productControler_1.getProducts, errorHandler_1.default);
router.route("/").post(authentification_1.default, productControler_1.addProduct, errorHandler_1.default);
router.route("/:id").put(authentification_1.default, productControler_1.updateProduct, errorHandler_1.default);
router.route("/:id").delete(authentification_1.default, productControler_1.deleteProduct, errorHandler_1.default);
router.route("/:id/upload").put(body_parser_1.default.raw({ type: ["image/jpeg", "image/png"], limit: "5mb" }), productControler_1.uploadPhoto, errorHandler_1.default);
exports.default = router;
//# sourceMappingURL=productsRoute.js.map