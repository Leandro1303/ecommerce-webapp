import express from 'express';
import { Shop } from '../../models/shopModel.js';

const router = express.Router();

// POST - Create a new shop
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.items
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, items'
            });
        }
        const newShop = {
            title: request.body.title,
            items: request.body.items
        };
        const shop = await Shop.create(newShop);
        return response.status(201).send(shop);
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ error: error.message });
    }
});

// GET - Get all shops
router.get('/', async (request, response) => {
    try {
        const shops = await Shop.find({});
        return response.status(200).json({
            count: shops.length,
            data: shops
        });
    } catch (error) {
        return response.status(500).send({ error: error.message });
    }
});

// GET - Get a specific shop by ID
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const shop = await Shop.findById(id);
        return response.status(200).json({shop});
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

// PUT - Update a specific shop by ID
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.items
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, items'
            });
        }

        const { id } = request.params;

        const result = await Shop.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).send({
                message: 'Shop not found'
            });
        }
        return response.status(200).send({
            message: 'Shop updated successfully'
        });
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

// DELETE - Delete a specific shop by ID
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Shop.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({
                message: 'Shop not found'
            });
        }

        return response.status(200).send({ message: 'Shop deleted successfully' });
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

export default router;
