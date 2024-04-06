import express from 'express';

import taskRouter from './routers/task.js';
import userRouter from './routers/user.js';
import shopRouter from './routers/shopRoute.js';
import cors from 'cors';
// Conección BD
import './db/dbconnection.js';

const PORT = 5555 || process.env.PORT;

const app = express()
const port = PORT
app.use(cors())
app.use(express.json())
app.use('/tasks', taskRouter)
app.use('/users', userRouter)
app.use('/shops', shopRouter)


app.listen(port, () => {
    console.log('Server running... http://localhost:' + port)
})
