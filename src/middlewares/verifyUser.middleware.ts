import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import statusCodes from '../utils/statusCodes';

const UserSchema = Joi.object({
  username: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const { error } = UserSchema.validate(req.body);

  if (error) {
    if (error.message.includes('required')) {
      return res.status(statusCodes.BAD_REQUEST).json({ message: error.message });
    }
    return res.status(statusCodes.UNPROCESSABLE).json({ message: error.message });
  }
  next();
};

export default validateUser;
