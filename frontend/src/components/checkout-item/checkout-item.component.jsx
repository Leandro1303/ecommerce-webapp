import Swal from "sweetalert2"

import PropTypes from 'prop-types';

import { useSelector, useDispatch } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart, clearItemFromCart, removeItemFromCart } from "../../store/cart/cart.action";

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton
} from './checkout-item.styles'

const CheckoutItem = ({ cartItem }) => {
  const { name, image, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

  function clearItemConfirm(){
    Swal.fire({
      title: `Are you sure you want to remove ${name}?`,
      text: "You can add it again later.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Remove"
    }).then((result) => {
      if (result.isConfirmed) {
        clearItemHandler()
        Swal.fire({
          title: "Removed!",
          text: "Product removed from cart.",
          icon: "success"
        });
      }
    });
  }

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={image} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>${price} </BaseSpan>
      <RemoveButton onClick={clearItemConfirm}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

CheckoutItem.propTypes = {
  cartItem: PropTypes.object.isRequired
}

export default CheckoutItem;