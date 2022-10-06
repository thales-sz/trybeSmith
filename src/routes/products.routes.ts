import express, { Response, Request } from 'express';

const router = express.Router();

router.post('/', (req: Request, res: Response) => {
  const product = req.body;
  const newProduct = productController.create();

  res.status(201).json(newProduct);
});

export default router;