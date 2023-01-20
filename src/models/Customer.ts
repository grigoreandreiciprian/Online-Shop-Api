import { DataTypes, Model, Sequelize } from "sequelize";



export interface CostumerAtributes {

    id?: number | null
    email: string
    password: string
    fullName: string
    streetAdress: string
    province: string
    city: string
    postalCode: string
    country: string
    phone: string
    // picture: Blob

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


        streetAdress: {
            type: DataTypes.STRING,
            allowNull: false,

            validate: {
                notNull: {
                    msg: 'Provide a value to street adress'
                },

                notEmpty: {
                    msg: 'Provide a value to street adress'
                },
            },
        },

        province: {
            type: DataTypes.STRING,
            allowNull: false,

            validate: {
                notNull: {
                    msg: 'Provide a value to province'
                },

                notEmpty: {
                    msg: 'Provide a value to province'
                },
            },
        },

        city: {
            type: DataTypes.STRING,
            allowNull: false,

            validate: {
                notNull: {
                    msg: 'Provide a value to city'
                },

                notEmpty: {
                    msg: 'Provide a value to city'
                },
            },
        },

        postalCode: {
            type: DataTypes.STRING,
            allowNull: false,

            validate: {
                notNull: {
                    msg: 'Provide a value to postal code'
                },

                notEmpty: {
                    msg: 'Provide a value to postal code'
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
            type: DataTypes.STRING,
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

        // picture: {
        //     type: DataTypes.BLOB("long")
        // }

    }, {
        sequelize: sequelize,
        tableName: "costumers",
        createdAt: false,
        timestamps: false,


    })

    return Custumer;
};