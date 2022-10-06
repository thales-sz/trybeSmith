import connection from '../models/connection';
import { ProductsModel } from '../models';
import IProduct from '../interfaces/product.interface';

export default class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async create(product: IProduct): Promise<IProduct> {
    return this.model.create(product);
  }

  public async getProducts(): Promise<IProduct[]> {
    return this.model.getProducts();
  }
}