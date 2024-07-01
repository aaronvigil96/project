import { DataTypes } from "sequelize";
import { sequelize } from "../db/sequelize.js";

export const Brands = sequelize.define('brands', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    is_deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
},{
    timestamps: true
});