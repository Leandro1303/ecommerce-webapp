import express from "express";
import { resolve } from "path";
import dotenv from "dotenv";
import stripe from "stripe";

dotenv.config({ path: "./.env" });

const app = express();
const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

app.use(express.static(process.env.STATIC_DIR));

app.get("/", (req, res) => {
  const path = resolve(process.env.STATIC_DIR + "/index.html");
  res.sendFile(path);
});

app.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

app.post("/create-payment-intent", async (req, res) => {
  // Aquí puedes agregar la lógica para crear el intento de pago
});

const PORT = process.env.PORT || 5252;
app.listen(PORT, () =>
  console.log(`Node server listening at http://localhost:${PORT}`)
);
