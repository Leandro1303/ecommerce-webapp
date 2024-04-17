import { useSelector } from "react-redux";

// COMPONENTS
import CheckoutAddress from "../../components/checkout-address/checkout-address.component.jsx";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentFrom from "../../components/payment-form/payment-form.component.jsx";

// REDUX - SELECTORS
import {
    selectCartItems,
    selectCartTotal
} from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector.js";

// STYLES
import {
    CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
    Total
} from './checkout.styles'

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);

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
            {currentUser ? (
                <CheckoutAddress />
            ) : (
                <h3>Favor inicie seccion o registrese para completar la orden.</h3>
            )}
            {currentUser &&
                <PaymentFrom />
            }
        </CheckoutContainer>
    );
}

export default Checkout;
