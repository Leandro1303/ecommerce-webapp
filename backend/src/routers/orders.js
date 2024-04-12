import express from 'express';
import { Order } from '../models/orderModel.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Ruta para crear un nuevo pedido
router.post('/', auth, async (req, res) => {
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

// Ruta para obtener todos los pedidos
router.get('/', auth, async (req, res) => {
  try {
    const orders = await Order.find().populate({ path: 'users', model: 'User', options: { strictPopulate: false } }).populate('products');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para obtener todas las órdenes de un usuario
router.get('/my-orders', auth, async (req, res) => {
  try {
  
      const orders = await Order.find({ user: req.user._id });

      res.status(200).json(orders);
  } catch (error) {
      console.error(error);
      res.status(500).send('Error de servidor');
  }
});

// Ruta para obtener pedidos por id
router.get('/:id', auth, async (req, res) => {
  try {
    const orders = await Order.findById(req.params.id);
    if (!orders) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para eliminar un pedido por su ID
router.delete('/:id', auth, async (req, res) => {
 try {
  const result = await Order.findByIdAndDelete(req.params.id);
  if (!result) {
    return res.status(404).json({ message: 'No se ha encontrado la orden' });
  }
  res.json({ message: 'El pedido fue borrado correctamente' });
} catch (error) {
  res.status(500).json({ message: error.message })
 }
});

export default router;
