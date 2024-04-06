import express from 'express';
import { Order } from '../models/orderModel.js';

const router = express.Router();

// Ruta para obtener todos los pedidos
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().populate({ path: 'users', model: 'User', options: { strictPopulate: false } }).populate('products');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para crear un nuevo pedido
router.post('/', async (req, res) => {
  const order = new Order({
    user: req.body.user,
    products: req.body.products,
    orderStatus: req.body.orderStatus,
    total: req.body.total,
    createdAt: req.body.createdAt
  });

  try {
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


export default router;

