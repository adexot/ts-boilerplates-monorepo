import express from 'express';
import OrderService from '../services/order';

const router = express.Router();

const orderService = new OrderService({});

router.post('/deposit', (req, res) => {
  const { amount, token } = req.body;
  orderService
    .deposit(amount, token)
    .then((value: number) => res.status(200).json({ value }))
    .catch(() => res.sendStatus(400));
});

router.get('/', (req, res) => {
  res.status(200).json({
    data: null,
    message: 'working as expected',
  });
});

export default router;
