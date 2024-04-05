import mongoose from 'mongoose';

const shopSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    items: [
        {
            name: {
                type: String,
                required: true
            },
            imageUrl: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            old_price: {
                type: Number,
                required: true
            }
        }
    ]
});

export const Shop = mongoose.model('Shop', shopSchema);
