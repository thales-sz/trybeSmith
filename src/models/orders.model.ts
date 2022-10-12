import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import IOrder from '../interfaces/order.inteface';

export default class OrdersModel {
  constructor(private connection: Pool) {
  }

  public async getOrders(): Promise<IOrder[]> {
    const query = `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.Orders as o
    INNER JOIN Trybesmith.Products as p
    ON p.orderId = o.id
    GROUP BY o.id`;
    const [result] = await this.connection.execute<RowDataPacket[]>(query);
    return result as IOrder[];
  }

  public async createOrder(order: IOrder): Promise<IOrder> {
    const querys = ['INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      'UPDATE Trybesmith.Products SET orderId=? WHERE id=?'];
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(querys[0], [order.userId]);

    const products = order.productsIds.map(async (prodId) => {
      await this.connection.execute<ResultSetHeader>(querys[1], [insertId, prodId]);
    });

    Promise.all(products);

    return { ...order };
  }
}