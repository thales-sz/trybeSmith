import express from 'express';
import ProductsController from '../controllers/products.controller';

const router = express.Router();

const productsController = new ProductsController();

router.post('/', productsController.create);

export default router;