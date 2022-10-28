"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Costumer = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("./config/db"));
const Orders_1 = __importDefault(require("./Orders"));
class Costumer extends sequelize_1.Model {
}
exports.Costumer = Costumer;
;
Costumer.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide a value to email'
            },
            notEmpty: {
                msg: 'Provide a value to email'
            },
        },
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide a value to password'
            },
            notEmpty: {
                msg: 'Provide a value to password'
            },
        },
    },
    fullName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide a value to full name'
            },
            notEmpty: {
                msg: 'Provide a value to full name'
            },
        },
    },
    billingAddress: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide a value to billing adress'
            },
            notEmpty: {
                msg: 'Provide a value to billing adress'
            },
        },
    },
    country: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide a value to country'
            },
            notEmpty: {
                msg: 'Provide a value to country'
            },
        },
    },
    phone: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Provide a value to  phone'
            },
            notEmpty: {
                msg: 'Provide a value to phone'
            },
        },
    },
}, {
    sequelize: db_1.default,
    tableName: "costumers",
    createdAt: false,
    timestamps: false,
});
Costumer.hasMany(Orders_1.default, {
    onDelete: "CASCADE",
    as: "fk_costumer_id",
    foreignKey: {
        field: "costumer_id",
        allowNull: false,
    }
});
exports.default = Costumer;
//# sourceMappingURL=Costumers.js.map