import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// REDUX
import {
    selectCartCount,
    selectIsCartOpen
} from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

// ASSETS
import ShoppingDarkSvg from '../../assets/cart-white.svg'
import ShoppingLightSvg from '../../assets/cart-black.svg'

// STYLES
import {
    ShoppingIcon,
    CartIconContainer,
    ItemCount
} from './cart-icon.styles'
import { selectUserDropdown } from '../../store/user/user.selector';
import { setIsUserDropdownOpen } from '../../store/user/user.action';

const CartIcon = () => {
    const [isDarkMode, setIsDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches
    ? ShoppingDarkSvg
    : ShoppingLightSvg);
    const dispatch = useDispatch();

    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);
    const isUserDropdownOpen = useSelector(selectUserDropdown);

    const toggleIsCartOpen = () => {
        dispatch(setIsCartOpen(!isCartOpen));
        isUserDropdownOpen ? dispatch(setIsUserDropdownOpen(!isUserDropdownOpen)) : null;
    }

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (event) => {
            setIsDarkMode(event.matches ? ShoppingDarkSvg : ShoppingLightSvg);
        };

        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon src={isDarkMode} className='shopping-icon' />
            <ItemCount >{cartCount > 99 ? "+99" : cartCount }</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;
