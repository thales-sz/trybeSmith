import { RowDataPacket } from 'mysql2';
import connection from '../models/connection';
import { UsersModel } from '../models';

export default class LoginService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async getUserByLogin(username: string): Promise<RowDataPacket[]> {
    return this.model.getUserByLogin(username);
  }
}