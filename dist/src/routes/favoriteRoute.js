"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const favoritesControler_1 = require("../controlers/favoritesControler");
const router = express_1.default.Router();
router.route("/").get(favoritesControler_1.getAll);
router.route("/").post(favoritesControler_1.addToFavorite);
router.route("/:id").delete(favoritesControler_1.deleteFavorite);
exports.default = router;
//# sourceMappingURL=favoriteRoute.js.map