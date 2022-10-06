import { Request, Response } from 'express';
import Joi from 'joi';
import IUser from '../interfaces/user.interface';
import { LoginService } from '../services';
import generateJWT from '../utils/generateJWT';
import statusCodes from '../utils/statusCodes';

const body = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export default class LoginController {
  constructor(private loginService = new LoginService()) {}

  public login = async (req: Request, res: Response) => {
    const userBody: IUser = req.body;
    const { error } = body.validate(userBody);

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    const [user] = await this.loginService.getUserByLogin(userBody.username);
   
    if (!user || user.password !== userBody.password) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }

    const token = generateJWT(user as IUser);

    return res.status(statusCodes.OK).json({ token });
  };
}