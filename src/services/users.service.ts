import connection from '../models/connection';
import { UsersModel } from '../models';
import IUser from '../interfaces/user.interface';

export default class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async registerUser(user: IUser): Promise<IUser> {
    const newUser = await this.model.registerUser(user);
    return newUser;
  }
}