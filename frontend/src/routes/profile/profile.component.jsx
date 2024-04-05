import {
  Route,
  Routes,
} from "react-router-dom"

// COMPONENTS
import User from "../user/user.component"
import UserOrders from "../user-order/user-order.component"
import Wishlist from "../wishlist/wishlist.component"

const Profile = () => {
  return (
    <Routes>
      <Route path="user" element={<User />} />
      <Route path="orders" element={<UserOrders />} />
      <Route path="wishlist" element={<Wishlist />} />
    </Routes>
  )
}

export default Profile
