"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter = express_1.default.Router();
const errorHandler_1 = __importDefault(require("../midleware/errorHandler"));
const costumerControler_1 = require("../controlers/costumerControler");
userRouter.route("/").get(costumerControler_1.getAll, errorHandler_1.default);
userRouter.route("/").post(costumerControler_1.addUser, errorHandler_1.default);
userRouter.route("/:id").put(costumerControler_1.updateUser, errorHandler_1.default);
userRouter.route("/:id").delete(costumerControler_1.deleteUser, errorHandler_1.default);
exports.default = userRouter;
//# sourceMappingURL=costumerRoute.js.map