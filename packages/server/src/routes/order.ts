import express from 'express';
import OrderService from '../services/order';

const router = express.Router();

const orderService = new OrderService({});

router.post('/deposit', (req, res) => {
  const { amount, token } = req.body;
  orderService
    .deposit(amount, token)
    .then((value: number) => res.send(value))
    .catch(() => res.sendStatus(400));
});

export default router;
