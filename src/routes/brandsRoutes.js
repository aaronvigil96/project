import { Router } from "express";
import { brandsController } from "../controllers/brandsController.js";

const router = Router();

router.get('/', brandsController.getAll);
router.post('/', brandsController.create);
router.get('/:id', brandsController.getById);
router.put('/:id', brandsController.update);

export default router;