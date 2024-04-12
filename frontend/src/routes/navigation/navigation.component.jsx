import { Fragment } from "react";
import { Outlet } from "react-router-dom";

// COMPONENTS
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component.jsx";
import CartIcon from "../../components/cart-icon/cart-icon.component";
//import Footer from "../../components/footer/footer.component.jsx";

// REDUX
import { useSelector } from "react-redux";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectUserDropdown, selectCurrentUser } from "../../store/user/user.selector";

// ASSETS
import StoreLogo from '../../assets/store-shopper.svg'

// STYLES
import {
    NavigationContainer,
    NavLinks,
    NavLink,
    LogoContainer,
    Logo
} from './navigation.styles'
import AvatarDropdown from "../../components/user-dropdown/user-dropdown.component.jsx";
import UserIcon from "../../components/user-icon/user-icon.component.jsx";

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);
    const isUserOpen = useSelector(selectUserDropdown);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <Logo src={StoreLogo} />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {currentUser ? (
                        <UserIcon />
                    ) : (
                        <NavLink to='/auth'>
                            SIGN IN
                        </NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isUserOpen && <AvatarDropdown/>}
                {isCartOpen && <CartDropdown/>}
            </NavigationContainer>
            <Outlet />
            {/* <Footer /> */}
        </Fragment>
    )
}

export default Navigation;
