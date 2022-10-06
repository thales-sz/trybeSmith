import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/product.interface';

export default class ProductsModel {
  constructor(private connection: Pool) {
  }

  public async registerUser(product: IProduct): Promise<void> {
    const query = 'INSERT INTO Trybesmith.Users (name, ) VALUES (?, ?)';
    await this.connection.execute<ResultSetHeader>(query, [product.name, product.amount]);
  }
}