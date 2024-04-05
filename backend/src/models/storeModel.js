import mongoose from 'mongoose';

const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    sales: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sale'
    }],
    inventory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Inventory'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const Store = mongoose.model('Store', storeSchema);
