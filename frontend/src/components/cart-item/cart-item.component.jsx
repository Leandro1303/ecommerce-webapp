import PropTypes from 'prop-types'

// STYLES
import {
    CartItemContainer,
    ItemDetails
} from './cart-item.styles'

const CartItem = ({cartItem}) => {
    const { name, image, price, quantity } = cartItem;
    return (
        <CartItemContainer>
            <img src={image} alt={`${name}`} />
            <ItemDetails>
                <span className='name'>{name}</span>
                <span className='price'>
                    {quantity} x ${price}
                </span>
            </ItemDetails>
        </CartItemContainer>
    )
}

CartItem.propTypes = {
    cartItem: PropTypes.object.isRequired
}   

export default CartItem;