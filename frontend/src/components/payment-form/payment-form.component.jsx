import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { selectCartTotal,selectCartItems } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

import { FormContainer } from "./payment-form.styles";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useNavigate } from "react-router-dom";

import { PaymentButton, PaymentFormContainer } from "./payment-form.styles";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  const cartItems = useSelector(selectCartItems);
  const amount = useSelector(selectCartTotal);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const makeOrder = async () => {
    try {
      if (!currentUser) {
        console.error("Usuario no encontrado.");
        return;
      }
  
      const productsData = cartItems.map(item => ({
        name: item.name,
        image: item.image,
        quantity: item.quantity,
        price: item.price
      }));
      console.log(productsData);
      await axios.post("http://localhost:5555/orders", {
        user: currentUser._id,
        products: productsData,
        orderStatus: "pending",
        total: amount,
        createdAt: new Date().toISOString(), // Convertir a cadena ISO 8601
    });
    } catch (error) {
      console.error("Error al subir la orden:", error);
    }
  };
  

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPayment(true);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => {
      return res.json();
    });
    console.log(response);

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.email : "Guest User",
        },
      },
    });
    console.log("Current User", currentUser, "Payment Result", paymentResult);
    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful!");
        await makeOrder();
        navigate("/payment-success");
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <PaymentButton
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          isLoading={isProcessingPayment}
        >
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
