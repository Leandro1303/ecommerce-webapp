import express from 'express';
import Stripe from "stripe";

const router = express.Router()

const stripe = new Stripe(process.env.STRIPE_KEY, {
    apiVersion: '2023-08-16'
});

router.post('/paymentintent', async (req, res, next) => {
    const model = req.body;

    try {
        const p = await stripe.paymentIntents.create({
            amount: model.amount,
            currency: model.currency || 'USD',
            automatic_payment_methods: {
                enabled: true,
            },
        });

        res.send({
            clientSecret: p?.client_secret,
        });
    } catch(e) {
        res.status(500).send({});
    }
});