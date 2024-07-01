import { Router } from "express";
import brandsRoutes from './brandsRoutes.js';
import productsRoutes from './productsRoutes.js';

const router = Router();

router.use('/brands', brandsRoutes);
router.use('/products', productsRoutes);

export default router;