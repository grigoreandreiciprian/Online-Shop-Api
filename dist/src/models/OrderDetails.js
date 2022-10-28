"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    class OrderDetails extends sequelize_1.Model {
    }
    OrderDetails.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        price: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Provide a value order price",
                },
                notEmpty: {
                    msg: "Provide a value to order price",
                },
            },
        },
        quantity: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Provide a value order quantity",
                },
                notEmpty: {
                    msg: "Provide a value to order quantity",
                },
            },
        },
    }, {
        sequelize: sequelize,
        tableName: "orderDetails",
        createdAt: false,
        timestamps: false,
    });
    return OrderDetails;
};
//# sourceMappingURL=OrderDetails.js.map