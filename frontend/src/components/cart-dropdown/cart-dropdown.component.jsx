import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '../button/button.component.jsx';
import CartItem from '../cart-item/cart-item.component';
import {
  selectCartItems,
  selectIsCartOpen
} from '../../store/cart/cart.selector';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems
} from './cart-dropdown.styles';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { Link } from 'react-router-dom';

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const isCartOpen = useSelector(selectIsCartOpen);

  const goToCheckoutHandler = () => {
    navigate('/checkout');
    dispatch(setIsCartOpen(!isCartOpen));
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem._id} cartItem={cartItem} />
          ))
        ) : (<div>
              <EmptyMessage>Your cart is empty</EmptyMessage> <br/>
              <Link to={'/shop'}>Start shopping</Link>
            </div>)}
      </CartItems>
      <Button buttonType="base" onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;