import { Pool, RowDataPacket } from 'mysql2/promise';
import IOrder from '../interfaces/order.inteface';

export default class OrdersModel {
  constructor(private connection: Pool) {
  }

  public async getOrders(): Promise<IOrder[]> {
    const query = `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.Orders as o
    INNER JOIN Trybesmith.Product as p
    ON p.id = o.orderId`;
    const [result] = await this.connection.execute<RowDataPacket[]>(query);
    return result as IOrder[];
  }
}