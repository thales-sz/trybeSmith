import express from 'express';
import ProductsController from '../controllers';

const router = express.Router();

const productsController = new ProductsController();

router.post('/', productsController.create);

router.get('/', productsController.getProducts);

export default router;