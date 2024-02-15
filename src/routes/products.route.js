import { Router } from 'express';
import { ProductsController } from '../controllers/products.controller.js';

const router = Router();

router.get('/', ProductsController.getProducts);

router.get('/:pid', ProductsController.getProductById);

router.post('/', ProductsController.addProduct);


export default router;

