import { Request, Response } from 'express';
import { OrdersService } from '../services';
import statusCodes from '../utils/statusCodes';

export default class OrdersController {
  constructor(private ordersService = new OrdersService()) {}

  public getOrders = async (req: Request, res: Response) => {
    const orders = await this.ordersService.getOrders();
    return res.status(statusCodes.OK).json(orders);
  };

  public createOrder = async (req: Request, res: Response) => res.status(statusCodes.OK).json('oi');
}