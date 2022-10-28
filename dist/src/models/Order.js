"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    class Orders extends sequelize_1.Model {
    }
    ;
    Orders.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ammount: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Provide a value to ammount'
                },
                notEmpty: {
                    msg: 'Provide a value to ammount'
                },
            },
        },
        shippingAdress: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Provide a value to shipping adress'
                },
                notEmpty: {
                    msg: 'Provide a value to shipping adress'
                },
            },
        },
        orderEmail: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Provide a value to order email'
                },
                notEmpty: {
                    msg: 'Provide a value to order email'
                },
            },
        },
        orderDate: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Provide a value to order date'
                },
                notEmpty: {
                    msg: 'Provide a value to order date'
                },
            },
        },
        orderStatus: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Provide a value to order status'
                },
                notEmpty: {
                    msg: 'Provide a value to order status'
                },
            },
        },
    }, {
        sequelize: sequelize,
        tableName: "orders",
        createdAt: false,
        timestamps: false,
    });
    return Orders;
};
//# sourceMappingURL=Order.js.map