"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    class Favorite extends sequelize_1.Model {
    }
    Favorite.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
    }, {
        sequelize: sequelize,
        tableName: "favorites",
        createdAt: false,
        timestamps: false,
    });
    return Favorite;
};
//# sourceMappingURL=Favorites.js.map