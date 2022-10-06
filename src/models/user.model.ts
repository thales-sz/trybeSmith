import { Pool, RowDataPacket } from 'mysql2/promise';
import IUser from '../interfaces/user.interface';

export default class UsersModel {
  constructor(private connection: Pool) {
  }

  public async registerUser(user: IUser): Promise<void> {
    const query = `
    INSERT INTO
    Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?)`;
    await this.connection
      .execute(query, [user.username, user.classe, user.level, user.password]);
  }

  public async getUserByLogin(username: string): Promise<RowDataPacket[]> {
    const query = `SELECT u.id, u.username, u.classe, u.level, u.password
    FROM Trybesmith.Users u
    WHERE u.username = ?`;
    const [result] = await this.connection.execute<RowDataPacket[]>(query, [username]);
    return result;
  }
}