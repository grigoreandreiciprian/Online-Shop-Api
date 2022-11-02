import { DataTypes, Model, Sequelize } from "sequelize";



export interface CostumerAtributes {

    id?: number | null
    email: string
    password: string
    fullName: string
    billingAddress: string
    country: string
    phone: bigint
    picture: Blob

}

export default (sequelize: Sequelize) => {


    class Custumer extends Model<CostumerAtributes>{
    };


    Custumer.init({

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        email: {
            type: DataTypes.STRING,
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
            type: DataTypes.STRING,
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
            type: DataTypes.STRING,
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
            type: DataTypes.STRING,
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
            type: DataTypes.STRING,
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
            type: DataTypes.BIGINT,
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

        picture: {
            type: DataTypes.BLOB("long")
        }

    }, {
        sequelize: sequelize,
        tableName: "costumers",
        createdAt: false,
        timestamps: false,


    })

    return Custumer;
};