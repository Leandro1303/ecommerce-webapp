import { useSelector } from "react-redux";

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
    const currentUser = useSelector(selectCurrentUser);
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Desciption</span>
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
            {currentUser ? (
                <CheckoutAddress />
            ) : ( <h2>Please sign in to continue</h2> )}
            {currentUser && <PaymentFrom />}
        </CheckoutContainer>
    )
}

export default Checkout;