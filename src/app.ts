import express from 'express';
import { ProductsRoutes } from './routes';

const app = express();

app.use(express.json());

app.use('/products', ProductsRoutes);

app.get('/ping', (req, res) => {
  res.status(200).json('pong');
});

export default app;
