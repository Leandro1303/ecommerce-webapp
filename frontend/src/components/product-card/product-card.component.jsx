import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
    ProductCartContainer,
    CardFooter,
    Name,
    Price
} from './product-card.styles'

const ProductCard = ({ product }) => {
    const { name, price, image } = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const addProductToCart = (e) => {
        e.preventDefault();
        dispatch(addItemToCart(cartItems, product));
    };

    return (
        <ProductCartContainer
        to={`/product/${product._id}`}
        state={{ data: product }}        
        >
            <img src={image} alt={`${name}`} />
            <CardFooter>
                <Name>{name}</Name>
                <Price>${price.toFixed(2)}</Price>
            </CardFooter>
            <Button
                buttonType={BUTTON_TYPE_CLASSES.inverted}
                onClick={addProductToCart}
            >
                Add to cart
            </Button>
        </ProductCartContainer>
    )
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductCard;