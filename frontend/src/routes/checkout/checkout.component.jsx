import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios"; 
import { useNavigate } from 'react-router-dom';

import CheckoutAddress from "../../components/checkout-address/checkout-address.component.jsx";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentFrom from "../../components/payment-form/payment-form.component.jsx";

import {
    CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
    Total
} from './checkout.styles'
import { selectCurrentUser } from "../../store/user/user.selector.js";

const Checkout = () => {
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const navigate = useNavigate();

    const makeOrder = async () => {
        try {
            if (!currentUser) {
                console.error("Usuario no encontrado.");
                return;
            }
            
            await axios.post("http://localhost:5555/orders", {
                user: currentUser._id, 
                products: cartItems.map(item => ({ product: item._id })),
                orderStatus: "pending", 
                total: cartTotal,
                createdAt: new Date() 
            });
            setPaymentSuccess(true);
            navigate('/payment-success');
        } catch (error) {
            console.error("Error al procesar el pago:", error);
        }
    };
    
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem._id} cartItem={cartItem} />
            ))}
            <Total>Total: ${cartTotal}</Total>
            <CheckoutAddress />
            <PaymentFrom />
            <button onClick={makeOrder}>Simulate Successful Payment</button>
        </CheckoutContainer>
    );
}

export default Checkout;
