import React from 'react';
import backgroundImage from '../images/4951061_2579646.jpg'

const Footer = () => {
  return (
    <nav className="footer" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <p>Copyright 2024 | Vintage Drip</p>
    </nav>
  );
};

export default Footer;