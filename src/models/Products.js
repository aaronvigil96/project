import { sequelize } from "../db/sequelize.js";
import { DataTypes } from "sequelize";
import { Brands } from "./Brands.js";

export const Products = sequelize.define('products', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            unique: true
        },
        is_deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },{
        timestamps: true
    }
);

Brands.hasOne(Products, { foreignKey: 'brand_id' });
Products.belongsTo(Brands, { foreignKey: 'brand_id' });