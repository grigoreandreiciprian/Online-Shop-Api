"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter = express_1.default.Router();
const errorHandler_1 = __importDefault(require("../midleware/errorHandler"));
const costumerControler_1 = require("../controlers/costumerControler");
const authentification_1 = __importDefault(require("../midleware/authentification"));
const body_parser_1 = __importDefault(require("body-parser"));
``;
userRouter.route("/").get(costumerControler_1.getAll, errorHandler_1.default);
userRouter.route("/").post(costumerControler_1.addUser, errorHandler_1.default);
userRouter.route("/:id").put(costumerControler_1.updateUser, errorHandler_1.default);
userRouter.route("/:id").delete(authentification_1.default, costumerControler_1.deleteUser, errorHandler_1.default);
userRouter.route("/log").post(costumerControler_1.logIn, errorHandler_1.default);
userRouter.route("/:id/upload").put(body_parser_1.default.raw({ type: ["image/jpeg", "image/png"], limit: "5mb" }), costumerControler_1.uploadPhoto, errorHandler_1.default);
exports.default = userRouter;
//# sourceMappingURL=costumerRoute.js.map