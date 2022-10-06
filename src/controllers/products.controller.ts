import { Request, Response } from 'express';
import { ProductService } from '../services';
import statusCodes from '../utils/statusCodes';

export default class ProductsController {
  constructor(private productService = new ProductService()) {}

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const newProduct = await this.productService.create(product);

    res.status(statusCodes.CREATED).json(newProduct);
  };

  public getProducts = async (req: Request, res: Response) => {
    const products = await this.productService.getProducts();

    res.status(statusCodes.OK).json(products);
  };
}