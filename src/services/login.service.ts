import connection from '../models/connection';
import { UsersModel } from '../models';
import IUser from '../interfaces/user.interface';

export default class LoginService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async getUserByLogin(username: string): Promise<IUser> {
    return this.model.getUserByLogin(username);
  }
}