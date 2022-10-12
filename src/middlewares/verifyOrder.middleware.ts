import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import statusCodes from '../utils/statusCodes';

const OrderSchema = Joi.object({
  productsIds: Joi.array().items(Joi.number()).min(1).required(),
}); 

const validateOrder = (req: Request, res: Response, next: NextFunction) => {
  const { error } = OrderSchema.validate(req.body);

  if (error) {
    if (error.message.includes('required')) {
      return res.status(statusCodes.BAD_REQUEST).json({ message: error.message });
    }
    return res.status(statusCodes.UNPROCESSABLE).json({ message: error.message });
  }
  next();
};

export default validateOrder;