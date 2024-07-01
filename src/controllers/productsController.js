import { ClientError } from '../handleResponses/ClientError.js';
import { handleResponse } from '../handleResponses/handleResponse.js';
import {productsService} from '../services/productsService.js';

export const productsController = {
    getAll: async (req, res, next) => {
        try{
            const products = await productsService.getAll();
            handleResponse(res, 200, products);
        }catch(err){
            next(err);
        }
    },
    create: async (req, res, next) => {
        try{
            const {name, brand_id} = req.body;
            const newProduct = await productsService.create(name, brand_id);
            handleResponse(newProduct, 200, newProduct);
        }catch(err){
            next(err);
        }
    }
}