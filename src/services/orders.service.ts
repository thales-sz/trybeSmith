import connection from '../models/connection';
import { OrdersModel } from '../models';
import IOrder from '../interfaces/order.inteface';

export default class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getOrders(): Promise<IOrder[]> {
    return this.model.getOrders();
  }
}