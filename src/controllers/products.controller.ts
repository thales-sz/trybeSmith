import { Request, Response } from 'express';
import { ProductsService } from '../services';
import statusCodes from '../utils/statusCodes';

export default class ProductsController {
  constructor(private productsService = new ProductsService()) {}

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const newProduct = await this.productsService.create(product);

    res.status(statusCodes.CREATED).json(newProduct);
  };

  public getProducts = async (req: Request, res: Response) => {
    const products = await this.productsService.getProducts();

    res.status(statusCodes.OK).json(products);
  };
}