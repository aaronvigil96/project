import { handleResponse } from "../handleResponses/handleResponse.js";
import { brandsService } from "../services/brandsService.js";
import { ClientError } from "../handleResponses/ClientError.js";

export const brandsController = {
    getAll: async (req, res, next) => {
        try{
            const brands = await brandsService.getAll();
            handleResponse(res, 200, brands);
        }catch(err){
            next(err);
        }
    },
    create: async (req, res, next) => {
        try{
            let {name} = req.body;
            let brand = await brandsService.getByName(name);
            if(brand) throw new ClientError('Esa marca ya existe', 500);
            brand = await brandsService.create(name);
            handleResponse(res, 200, brand);
        }catch(err){
            next(err);
        }
    },
    getById: async (req, res, next) => {
        try{
            let {id} = req.params;
            const brand = await brandsService.getById(Number(id));
            if(!brand) throw new ClientError(`No existe la marca con el id: ${id}`, 500);
            handleResponse(res, 200, brand);
        }catch(err){
            next(err);
        }
    },
    update: async (req, res, next) => {
        try{
            let {id} = req.params;
            let brand = await brandsService.getById(id);
            if(!brand) throw new ClientError(`No existe la marca con el id: ${id}`, 500);
            let {name} = req.body;
            name = name.toLowerCase();
            brand = await brandsService.getByName(name);
            if(brand) throw new ClientError(`Ya existe la marca con ese nombre`);
            brand = await brandsService.getById(id);
            brand = await brandsService.update(brand, name);
            handleResponse(res, 200, brand)
        }catch(err){
            next(err);
        }
    }
}