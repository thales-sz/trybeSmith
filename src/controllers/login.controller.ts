import { log } from 'console';
import { Request, Response } from 'express';
import Joi from 'joi';
import { LoginService } from '../services';
import statusCodes from '../utils/statusCodes';

const body = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export default class LoginController {
  constructor(private loginService = new LoginService()) {}

  public login = async (req: Request, res: Response) => {
    const userBody = req.body;
    const { error } = body.validate(userBody);

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    const user = await this.loginService.getUserByLogin(userBody.username);
    log(user);
    if (!user || user.password !== userBody.password) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }
    return res.status(statusCodes.OK).json(user);
  };
}