// ASSETS
import ProfileDarkSvg from './assets/user-icon-dark.svg';
import ProfileLightSvg from './assets/user-icon-light.svg';
import OrderDarkSvg from './assets/order-icon-dark.svg';
import OrderLightSvg from './assets/order-icon-light.svg';
import WishlistDarkSvg from './assets/wishlist-icon-dark.svg';
import WishlistLightSvg from './assets/wishlist-icon-light.svg';

const userOptions = [
    {
      id: 1,
      name: 'My Profile',
      route: '/profile/user',
      darkIcon: ProfileDarkSvg,
      lightIcon: ProfileLightSvg,
    },
    {
      id: 2,
      name: 'My Orders',
      route: '/profile/orders',
      darkIcon: OrderDarkSvg,
      lightIcon: OrderLightSvg,
    },
    {
      id: 3,
      name: 'My Wishlist',
      route: '/profile/wishlist',
      darkIcon: WishlistDarkSvg,
      lightIcon: WishlistLightSvg,
    }
];

export default userOptions;
