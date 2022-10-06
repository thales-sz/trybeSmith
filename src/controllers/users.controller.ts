import { Request, Response } from 'express';
import { UserService } from '../services';
import generateJWT from '../utils/generateJWT';
import statusCodes from '../utils/statusCodes';

export default class UsersController {
  constructor(private userService = new UserService()) {}

  public registerUser = async (req: Request, res: Response) => {
    const user = req.body;

    await this.userService.registerUser(user);

    const token = generateJWT(user);

    res.status(statusCodes.CREATED).json({ token });
  };
}