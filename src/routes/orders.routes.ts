import express from 'express';
import { OrdersController } from '../controllers';

const router = express.Router();

const ordersController = new OrdersController();

router.get('/', ordersController.getOrders);

export default router;