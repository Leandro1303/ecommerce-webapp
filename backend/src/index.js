import express from 'express';
import cors from 'cors';

import taskRouter from './routers/task.js';
import userRouter from './routers/user.js';
import shopRouter from './routers/shopRoute.js';
import orderRouter  from './routers/orders.js';
import productsRouter from './routers/productsRoute.js';
import paymentRouter from './routers/paymentRoute.js';

// Conección BD
import './db/dbconnection.js';

const PORT = 5555 || process.env.PORT;

const app = express()
const port = PORT

app.use(cors())
app.use(express.json())
app.use('/tasks', taskRouter);
app.use('/users', userRouter);
app.use('/shops', shopRouter);
app.use('/orders',orderRouter);
app.use('/products', productsRouter);
app.use('/paymentIntent', paymentRouter);

app.listen(port, () => {
    console.log('Server running... http://localhost:' + port)
})
