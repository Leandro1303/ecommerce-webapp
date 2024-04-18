import "./Navbar.css";
import shop from "../../assets/shop.svg";
// import sun from "../../assets/sun-solid.svg";
// import moon from "../../assets/moon-solid.svg";
import logout from "../../assets/right-from-bracket-solid.svg";
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
      <span className="title">E-Commerce Admin Panel</span>
      <span>

      <img
        src={logout}
        className="nav-logo"
        alt="exit-logo"
        onClick={handleLogout}
        style={{ cursor: 'pointer' }}
      />
      </span>
    </div>
  );
};

export default Navbar;
