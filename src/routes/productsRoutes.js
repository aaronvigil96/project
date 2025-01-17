import { Router } from "express";
import { productsController } from "../controllers/productsController.js";

const router = Router();

router.get('/', productsController.getAll);
router.post('/', productsController.create);

export default router;