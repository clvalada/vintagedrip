//Navbar.js
import React from "react";
import { Link } from 'react-router-dom';
import backgroundImage from './4951061_2579646.jpg';

const Navbar = () => {
    return (  
      <nav className="navbar" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h1><a href="/" className="navbar-logo">Vintage Drip</a></h1>
        <div className="Links">
            <Link to="/Hats">Hats</Link>
            <Link to="/Shirts">Shirts</Link>
            <Link to="/Other">Other</Link>
            <Link to="/About">About Us</Link>
            <Link to="/Blog">Blog</Link>
        </div> 
      </nav>
    );
  };


export default Navbar;