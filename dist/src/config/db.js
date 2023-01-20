"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// models
const Customer_1 = __importDefault(require("../models/Customer"));
const OrderDetails_1 = __importDefault(require("../models/OrderDetails"));
const Order_1 = __importDefault(require("../models/Order"));
const Product_1 = __importDefault(require("../models/Product"));
const dotenv_1 = __importDefault(require("dotenv"));
const Favorites_1 = __importDefault(require("../models/Favorites"));
dotenv_1.default.config();
const connectDB = () => {
    try {
        let sequelize = new sequelize_1.Sequelize("online-shop", "root", "582426", {
            host: "localhost",
            dialect: "mysql"
        });
        let db = {
            sequelize: sequelize,
            Sequelize: sequelize_1.Sequelize,
            models: {
                Customer: (0, Customer_1.default)(sequelize),
                Product: (0, Product_1.default)(sequelize),
                OrderDetails: (0, OrderDetails_1.default)(sequelize),
                Order: (0, Order_1.default)(sequelize),
                Favorite: (0, Favorites_1.default)(sequelize)
            }
        };
        db.models.Customer.hasMany(db.models.Order, {
            onDelete: 'CASCADE',
            as: 'fk_customer_id',
            foreignKey: {
                name: 'customer_id',
                allowNull: false
            },
        });
        db.models.Order.belongsTo(db.models.Customer, {
            as: 'fk_customer_id',
            foreignKey: {
                name: 'customer_id',
                allowNull: false
            },
        });
        db.models.Order.hasMany(db.models.OrderDetails, {
            onDelete: 'CASCADE',
            as: 'orderId',
            foreignKey: {
                name: 'order_id',
                allowNull: false
            },
        });
        db.models.OrderDetails.belongsTo(db.models.Order, {
            as: 'orderId',
            foreignKey: {
                name: 'order_id',
                allowNull: false
            },
        });
        db.models.Product.hasMany(db.models.OrderDetails, {
            onDelete: 'CASCADE',
            as: 'fk_product_id',
            foreignKey: {
                name: 'product_id',
                allowNull: false
            },
        });
        db.models.OrderDetails.belongsTo(db.models.Product, {
            as: 'fk_product_id',
            foreignKey: {
                name: 'product_id',
                allowNull: false
            },
        });
        db.models.Favorite.belongsTo(db.models.Product, {
            as: 'fk_product_id',
            foreignKey: {
                name: 'productId',
                allowNull: false
            }
        });
        db.models.Favorite.belongsTo(db.models.Customer, {
            as: 'fk_costumer_id',
            foreignKey: {
                name: 'costumerId',
                allowNull: false
            }
        });
        return db;
    }
    catch (e) {
        throw new Error(e);
    }
};
let db = connectDB();
exports.default = db;
//# sourceMappingURL=db.js.map