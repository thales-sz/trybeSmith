import Jwt, { Secret, SignOptions } from 'jsonwebtoken';
import IUser from '../interfaces/user.interface';
import 'dotenv/config';

const JWT_SECRET: Secret = 'secret';

const generateJWT = (user: IUser) => {
  const payload = {
    ...user,
  };

  const config: SignOptions = {
    expiresIn: '5d',
    algorithm: 'HS256',
  };

  const token = Jwt.sign(payload, JWT_SECRET, config);

  return token;
};

export default generateJWT;