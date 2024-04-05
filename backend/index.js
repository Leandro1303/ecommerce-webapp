import express from 'express';

import {
    PORT,
    MONGODBURL
} from './config.js';

import mongoose from 'mongoose';
import cors from 'cors';

import booksRoute from './routes/booksRoute.jss';
import shopRoute from './routes/shopRoute.js';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow custom Origin
/* app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
})); */

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Hello, world!');
});

app.use('/books', booksRoute);
app.use('/shops', shopRoute);

mongoose
    .connect(MONGODBURL)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB');
        console.log(error);
});
