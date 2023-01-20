import { Sequelize } from "sequelize";

// models
import Customer from "../models/Customer";
import OrderDetails from "../models/OrderDetails";
import Order from "../models/Order";
import Product from "../models/Product";

import dotenv from "dotenv";
import Favorite from "../models/Favorites";

dotenv.config();

const connectDB = () => {

    try {

        let sequelize = new Sequelize
            ("online-shop", "root", "582426",
                {
                    host: "localhost",
                    dialect: "mysql"
                }
            );
        let db = {
            sequelize: sequelize,
            Sequelize: Sequelize,
            models: {
                Customer: Customer(sequelize),
                Product: Product(sequelize),
                OrderDetails: OrderDetails(sequelize),
                Order: Order(sequelize),
                Favorite: Favorite(sequelize)
            }
        }
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
        })

        db.models.Favorite.belongsTo(db.models.Customer, {
            as: 'fk_costumer_id',

            foreignKey: {
                name: 'costumerId',
                allowNull: false
            }
        })
        return db;

    } catch (e) {
        throw new Error(e);
    }
}

let db = connectDB();

export default db;