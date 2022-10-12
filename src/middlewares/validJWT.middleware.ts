import Jwt, { Secret } from 'jsonwebtoken';

import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';
import IOrder from '../interfaces/order.inteface';

const secret: Secret = process.env.JWT_SECRET || 'string';

const validateJWT = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token || token === '') {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    Jwt.verify(token, secret);
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

const decodeToken = (token: string) => {
  try {
    const decode = Jwt.verify(token, secret);
    return decode as IOrder;
  } catch (error) {
    return null;
  }
};

export {
  validateJWT,
  decodeToken,
};