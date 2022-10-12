import express from 'express';
import { OrdersController } from '../controllers';
import validateJWT from '../middlewares/validJWT.middleware';

const router = express.Router();

const ordersController = new OrdersController();

router.get('/', ordersController.getOrders);

router.post('/', validateJWT, ordersController.createOrder);

export default router;