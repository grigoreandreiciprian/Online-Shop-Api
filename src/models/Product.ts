import { DataTypes, Model, Sequelize } from "sequelize";

export interface ProductAtributes {
  id?: number | null;
  name: String;
  price: Number;
  weight: Number;
  category: String;
  create_date: String;
  stock: number;
}

export default (sequelize: Sequelize) => {
  class Product extends Model<ProductAtributes> {}

  Product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      name: {
        type: DataTypes.STRING,
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
        type: DataTypes.INTEGER,
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
        type: DataTypes.INTEGER,
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
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
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
        type: DataTypes.INTEGER,
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
    },
    {
      sequelize: sequelize,
      tableName: "products",
      createdAt: false,
      timestamps: false,
    }
  );

  return Product;
};
