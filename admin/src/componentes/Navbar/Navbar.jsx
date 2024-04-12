import "./Navbar.css";
import shop from "../../assets/shop.svg";
import profile from "../../assets/profile.svg";
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../utils/backend.js';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser(); 
      window.location.reload();
    } catch (error) {
      console.error('Error al cerrar sesión:', error.message);
      
    }
  };

  return (
    <div className="navbar">
      <a href="/">
        <img src={shop} alt="nav-logo" className="nav-logo" />
      </a>
      <span>Ecommerce admin panel</span>
      <img
        src={profile}
        className="nav-profile"
        alt="profile-logo"
        onClick={handleLogout}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

export default Navbar;
