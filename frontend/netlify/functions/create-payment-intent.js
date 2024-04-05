import { config } from "dotenv";
import { createRequire } from "module";
import stripe from "stripe";

config();
const require = createRequire(import.meta);
const stripeSecretKey = require.env.VITE_STRIPE_SECRET_KEY;
const stripeInstance = stripe(stripeSecretKey);

export const handler = async (event) => {
    try {
        const { amount } = JSON.parse(event.body);

        const paymentIntent = await stripeInstance.paymentIntents.create({
            amount,
            currency: "usd",
            payment_method_types: ["card"],
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ paymentIntent }),
        };
    } catch (error) {
        console.log({ error });

        return {
            statusCode: 400,
            body: JSON.stringify({ error }),
        };
    }
};
