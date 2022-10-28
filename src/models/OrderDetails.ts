import { DataTypes, Model, Sequelize } from "sequelize";

export interface OrderDetailsAtributes {
  id?: number | null;
  price: number;
  quantity: number;
}

export default (sequelize: Sequelize) => {
  class OrderDetails extends Model<OrderDetailsAtributes> { }

  OrderDetails.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      price: {
        type: DataTypes.INTEGER,
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
        type: DataTypes.STRING,
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
    },
    {
      sequelize: sequelize,
      tableName: "orderDetails",
      createdAt: false,
      timestamps: false,
    }
  );

  return OrderDetails;
};
