//Navbar.js
import React from "react";
import { Link } from 'react-router-dom';
import leftImage from './man.png';
import rightImage from './woman.png';

const Navbar = () => {
    return (  
      <nav className="navbar" >
        <div className="navbar-images">
          <img src={leftImage} alt="Man in vintage clothing" className="navbar-image" />
          <h1><a href="/" className="navbar-logo">Vintage Drip</a></h1>
          <img src={rightImage} alt="Woman in vintage clothing" className="navbar-image" />
        </div>
        <div className="Links">
            <Link to="/Hats">Hats</Link>
            <Link to="/Shirts">Shirts</Link>
            <Link to="/Other">Other</Link>
            {/*<Link to="/About">About Us</Link>*/}
            <Link to="/Blog">Blog</Link>
        </div> 
      </nav>
    );
  };


export default Navbar;