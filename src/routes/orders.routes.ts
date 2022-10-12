import express from 'express';
import { OrdersController } from '../controllers';
import { validateJWT } from '../middlewares/validJWT.middleware';
import validateOrder from '../middlewares/verifyOrder.middleware';

const router = express.Router();

const ordersController = new OrdersController();

router.get('/', ordersController.getOrders);

router.post('/', validateJWT, validateOrder, ordersController.createOrder);

export default router;