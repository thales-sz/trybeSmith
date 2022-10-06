import express from 'express';
import { UsersController } from '../controllers';

const router = express.Router();

const usersController = new UsersController();

router.post('/', usersController.registerUser);

export default router;