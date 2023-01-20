import { DataTypes, Model, Sequelize } from "sequelize";


export interface FavoriteItem {
    id?: number | null;

}


export default (sequelize: Sequelize) => {
    class Favorite extends Model<FavoriteItem>{ }

    Favorite.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },

        },
        {
            sequelize: sequelize,
            tableName: "favorites",
            createdAt: false,
            timestamps: false,
        }
    );

    return Favorite;

}