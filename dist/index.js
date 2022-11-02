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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./src/config/db"));
const productsRoute_1 = __importDefault(require("./src/routes/productsRoute"));
const costumerRoute_1 = __importDefault(require("./src/routes/costumerRoute"));
const orderRoute_1 = __importDefault(require("./src/routes/orderRoute"));
const orderDetailsRoute_1 = __importDefault(require("./src/routes/orderDetailsRoute"));
dotenv_1.default.config();
let app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: "50mb" }));
app.use(express_1.default.urlencoded({ limit: "50mb" }));
app.use("/api/v1/products", productsRoute_1.default);
app.use("/api/v1/users", costumerRoute_1.default);
app.use("/api/v1/orders", orderRoute_1.default);
app.use("/api/v1/orderDetails", orderDetailsRoute_1.default);
db_1.default.sequelize.sync().then(() => {
    app.listen(process.env.PORT || 5000, () => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Express server is listening on port 5000!");
    }));
});
//# sourceMappingURL=index.js.map