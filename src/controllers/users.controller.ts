import { Request, Response } from 'express';
import { UsersService } from '../services';
import generateJWT from '../utils/generateJWT';
import statusCodes from '../utils/statusCodes';

export default class UsersController {
  constructor(private usersService = new UsersService()) {}

  public registerUser = async (req: Request, res: Response) => {
    const user = req.body;

    await this.usersService.registerUser(user);

    const token = generateJWT(user);

    return res.status(statusCodes.CREATED).json({ token });
  };
}