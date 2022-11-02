"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    class Product extends sequelize_1.Model {
    }
    Product.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Provide a value to product name",
                },
                notEmpty: {
                    msg: "Provide a value to product name",
                },
            },
        },
        price: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Provide a value to product price",
                },
                notEmpty: {
                    msg: "Provide a value to product price",
                },
            },
        },
        weight: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Provide a value to product weight",
                },
                notEmpty: {
                    msg: "Provide a value to product weight",
                },
            },
        },
        category: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Provide a value to product category",
                },
                notEmpty: {
                    msg: "Provide a value to product category",
                },
            },
        },
        create_date: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Provide a value to product creation date",
                },
                notEmpty: {
                    msg: "Provide a value to product creation date",
                },
            },
        },
        stock: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Provide a value to product stock",
                },
                notEmpty: {
                    msg: "Provide a value to product stock",
                },
            },
        },
        picture: {
            type: sequelize_1.DataTypes.BLOB("long")
        }
    }, {
        sequelize: sequelize,
        tableName: "products",
        createdAt: false,
        timestamps: false,
    });
    return Product;
};
//# sourceMappingURL=Product.js.map