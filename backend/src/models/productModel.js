import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    old_price: {
        type: String,
        required: true
    },
    ratings: [{
        customerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },
        rating: {
            type: Number,
            default: 0,
            required: true
        }
    }],
});

export const Product = mongoose.model("Product", productSchema);
