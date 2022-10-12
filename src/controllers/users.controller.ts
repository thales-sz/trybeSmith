import { Request, Response } from 'express';
import IUser from '../interfaces/user.interface';
import { UsersService } from '../services';
import generateJWT from '../utils/generateJWT';
import statusCodes from '../utils/statusCodes';

export default class UsersController {
  constructor(private usersService = new UsersService()) {}

  public registerUser = async (req: Request, res: Response) => {
    const user = req.body;

    const newUser = await this.usersService.registerUser(user);

    const token = generateJWT(newUser as IUser);

    return res.status(statusCodes.CREATED).json({ token });
  };
}