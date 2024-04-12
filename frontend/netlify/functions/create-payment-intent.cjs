const stripe = require("stripe")(`sk_test_51LDbVMFPDlImZzy9o1JNGXSq0vEsi8HQkOHkxdjekKfzAlG54NtX457mndm9DHHzaPAz1objlaRT2AKVHRqmrlbE00e7ebV9Ba`);


exports.handler = async (event) => {
    try {
        const { amount } = JSON.parse(event.body);

        const paymentIntent = await stripe.paymentIntents.create({
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
            status: 400,
            body: JSON.stringify({ error })
        };
    }
};
