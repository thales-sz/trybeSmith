import { Request, Response } from 'express';
import { OrdersService } from '../services';
import statusCodes from '../utils/statusCodes';

export default class OrdersController {
  constructor(private ordersService = new OrdersService()) {}

  public getOrders = async (req: Request, res: Response) => {
    const orders = await this.ordersService.getOrders();
    res.status(statusCodes.OK).json({ orders });
  };
}