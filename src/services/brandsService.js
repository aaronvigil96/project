import { Brands } from "../models/Brands.js";

export const brandsService = {
    getAll: async () => {
        const brands = await Brands.findAll();
        return brands;
    },
    create: async (name) => {
        const brand = await Brands.create({name: name.toLowerCase()});
        return brand;
    },
    getById: async (id) => {
        const brand = await Brands.findOne({where: {id, is_deleted: false}});
        return brand;
    },
    getByName: async (name) => {
        const brand = await Brands.findOne({where: {name, is_deleted: false}});
        return brand;
    },
    update: async (brand, name) => {

        let newBrand = brand;
        newBrand.name = name;
        await newBrand.save()
    }
};