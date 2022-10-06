import express from 'express';
import { OrdersRoutes, ProductsRoutes, UsersRoutes } from './routes';
import statusCodes from './utils/statusCodes';

const app = express();

app.use(express.json());

app.use('/products', ProductsRoutes);

app.use('/users', UsersRoutes);

app.use('/orders', OrdersRoutes);

app.get('/ping', (req, res) => {
  res.status(statusCodes.OK).json('pong');
});

export default app;
