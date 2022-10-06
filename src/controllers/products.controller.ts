import { Request, Response } from 'express';
import ProductService from '../services/products.service';
import statusCodes from '../utils/statusCodes';

export default class ProductsController {
  constructor(private productService = new ProductService()) {}

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const newProduct = await this.productService.create(product);

    res.status(statusCodes.CREATED).json(newProduct);
  };
}