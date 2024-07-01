import {Products} from '../models/Products.js';

export const productsService = {
    getAll: async () => {
        const products = await Products.findAll();
        return products;
    },
    create: async (name, brand_id) => {
        const product = await Products.create({
            name,
            brand_id
        });
        return product;
    }
}