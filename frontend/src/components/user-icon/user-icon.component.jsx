import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// REDUX
import { selectUserDropdown } from '../../store/user/user.selector';
import { setIsUserDropdownOpen } from '../../store/user/user.action';

// ASSETS
import UserDarkSvg from '../../assets/avatar-white.svg'
import UserLightSvg from '../../assets/avatar-black.svg'

// STYLES
import {
    AvatarActionIcon,
    AvatarIconContainer,
} from './user-icon.styles'
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

const UserIcon = () => {
    const [isDarkMode, setIsDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches
    ? UserDarkSvg
    : UserLightSvg);
    const dispatch = useDispatch();

    const isAvatarOpen = useSelector(selectUserDropdown);
    const isCartOpen = useSelector(selectIsCartOpen);

    const toggleIsAvatarOpen = () => {
        dispatch(setIsUserDropdownOpen(!isAvatarOpen));
        console.log(isCartOpen);
        isCartOpen ? dispatch(setIsCartOpen(!isCartOpen)) : null;
    }

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (event) => {
            setIsDarkMode(event.matches ? UserDarkSvg : UserLightSvg);
        };

        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    return (
        <AvatarIconContainer onClick={toggleIsAvatarOpen}>
            <AvatarActionIcon src={isDarkMode} />
        </AvatarIconContainer>
    )
}

export default UserIcon;
