const Router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: "usd",
        });
        res.status(200).json(paymentIntent.client_secret);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});




module.exports = Router
