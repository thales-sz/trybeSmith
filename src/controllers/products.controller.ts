import { Request, Response } from 'express';
import { ProductsService } from '../services';
import statusCodes from '../utils/statusCodes';
import ProductSchema from '../middlewares/verifyProduct';

export default class ProductsController {
  constructor(private productsService = new ProductsService()) {}

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const { error } = ProductSchema.validate(product);

    if (error) {
      if (error.message.includes('required')) {
        return res.status(400).json({ message: error.message });
      }
      return res.status(422).json({ message: error.message });
    }

    const newProduct = await this.productsService.create(product);

    return res.status(statusCodes.CREATED).json(newProduct);
  };

  public getProducts = async (req: Request, res: Response) => {
    const products = await this.productsService.getProducts();

    return res.status(statusCodes.OK).json(products);
  };
}