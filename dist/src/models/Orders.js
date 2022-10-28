"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orders = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("./config/db"));
const Costumers_1 = __importDefault(require("./Costumers"));
const OrderDetails_1 = __importDefault(require("./OrderDetails"));
class Orders extends sequelize_1.Model {
}
exports.Orders = Orders;
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
    sequelize: db_1.default,
    tableName: "orders",
    createdAt: false,
    timestamps: false,
});
Orders.belongsTo(Costumers_1.default, {
    as: "fk_Costumer_id",
    foreignKey: {
        field: "costumer_id",
        allowNull: false,
    },
});
Orders.hasMany(OrderDetails_1.default, {
    as: "fk_order_id",
    foreignKey: {
        field: "order_id",
        allowNull: false,
    }
});
exports.default = Orders;
//# sourceMappingURL=Orders.js.map