import React from 'react';
import './Navbar.css';
import shop from '../../assets/shop.svg';
import profile from  '../../assets/profile.svg';



const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={shop} alt="nav-logo" className='nav-logo' /> 
        <span>Ecommerce admin panel</span> 
        <img src={profile} className='nav-profile' alt="profile-logo" />
    </div>
  )
}

export default Navbar