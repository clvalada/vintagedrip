import React from "react";
import leftImage from './man.png';
import rightImage from './woman.png';

const Hero = () => {
    return ( 
      <div className="hero">
        <div className="hero-images">
          <img src={leftImage} alt="Man in vintage clothing" className="hero-image" />
          <h1>Clothing and Accessories from the '80s and '90s</h1>
          <img src={rightImage} alt="Woman in vintage clothing" className="hero-image" />
        </div>
      </div>
     );
}
 
export default Hero;