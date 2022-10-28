import { DataTypes, Model, Sequelize } from "sequelize"


export interface OrderAtributes {

    id?: number | null
    ammount: number
    shippingAdress: string
    orderEmail: string
    orderDate: string
    orderStatus: string
}

export default (sequelize: Sequelize) => {
 class Orders extends Model<OrderAtributes>{ };

Orders.init({

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },


    ammount: {
        type: DataTypes.INTEGER,
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
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
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

})

return Orders;
}