import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    orderedDate: {
        type: Date,
        default: Date.now
    },
    totalOrderPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
});

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    orders: [orderSchema]
});

export const Customer = mongoose.model('Customer', customerSchema);
