import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/product.interface';

export default class ProductsModel {
  constructor(private connection: Pool) {
  }

  public async create(product: IProduct): Promise<IProduct> {
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const result = await this.connection
      .execute<ResultSetHeader>(query, [product.name, product.amount]);
  
    const [dataInserted] = result;

    const { insertId } = dataInserted;

    return { id: insertId, ...product };
  }
}