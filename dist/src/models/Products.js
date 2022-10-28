"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("./config/db"));
const OrderDetails_1 = __importDefault(require("./OrderDetails"));
class Product extends sequelize_1.Model {
}
exports.Product = Product;
;
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
                msg: 'Provide a value to product name'
            },
            notEmpty: {
                msg: 'Provide a value to product name'
            },
        },
    },
    price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide a value to product price"
            },
            notEmpty: {
                msg: 'Provide a value to product price'
            },
        },
    },
    weight: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide a value to product weight"
            },
            notEmpty: {
                msg: 'Provide a value to product weight'
            },
        },
    },
    category: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide a value to product category"
            },
            notEmpty: {
                msg: 'Provide a value to product category'
            },
        },
    },
    create_date: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide a value to product creation date"
            },
            notEmpty: {
                msg: 'Provide a value to product creation date'
            },
        },
    },
    stock: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Provide a value to product stock"
            },
            notEmpty: {
                msg: 'Provide a value to product stock'
            },
        },
    },
}, {
    sequelize: db_1.default,
    tableName: "products",
    createdAt: false,
    timestamps: false,
});
Product.hasMany(OrderDetails_1.default, {
    onDelete: "CASCADE",
    as: "fk_product_id",
    foreignKey: {
        field: "product_id",
        allowNull: false,
    }
});
exports.default = Product;
//# sourceMappingURL=Products.js.map