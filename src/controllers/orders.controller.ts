import { Request, Response } from 'express';
import { OrdersService } from '../services';
import statusCodes from '../utils/statusCodes';
import IOrder from '../interfaces/order.inteface';
import { decodeToken } from '../middlewares/validJWT.middleware';

export default class OrdersController {
  constructor(private ordersService = new OrdersService()) {}

  public getOrders = async (req: Request, res: Response) => {
    const orders = await this.ordersService.getOrders();
    return res.status(statusCodes.OK).json(orders);
  };

  public createOrder = async (req: Request, res: Response) => {
    const token = req.headers.authorization;

    if (!token || token === '') {
      return res.status(401).json({ message: 'Token not found' });
    }

    const decoded = decodeToken(token);
    
    if (!decoded || typeof (decoded) === 'string') {
      return res.status(401).json({ message: 'Invalid token' });
    }

    const order: IOrder = {
      userId: decoded.id,
      ...req.body,
    };

    console.log('controller', order);

    const newOrder = await this.ordersService.createOrder(order);
    res.status(statusCodes.CREATED).json(newOrder);
  };
}