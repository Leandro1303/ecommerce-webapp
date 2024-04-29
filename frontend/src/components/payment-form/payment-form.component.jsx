import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

import {
  selectCartTotal,
  selectCartItems
} from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { clearCart } from "../../store/cart/cart.action";

import { FormContainer } from "./payment-form.styles";
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";

import { PaymentFormContainer } from "./payment-form.styles";
import { createOrder } from "../../utils/MongoDB/mongo.utils";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  const cartItems = useSelector(selectCartItems);
  const amount = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const makeOrder = async () => {
    try {
      await createOrder(currentUser, cartItems, amount);
    } catch (error) {
      console.error("Error al subir la orden:", error);
    }
  };

  const clearItemsFromCart = () => dispatch(clearCart());

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPayment(true);

    try {
      // Utiliza axios para realizar la solicitud POST al servidor local
      const response = await axios.post("http://localhost:5555/paymentIntent", {
        amount: amount * 100,
      });

      const clientSecret = response.data.clientSecret;

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
          clearItemsFromCart();
          navigate("/payment-success");
        }
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      setIsProcessingPayment(false);
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement hidePostalCode={true} />
        <Button
          buttonType="inverted"
          isLoading={isProcessingPayment}
        >
          Pay Now
        </Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
