import React from 'react';
import './Banner.css'; 
import backgroundimage from "../assets/backgroundimage.jpg"
const Banner = () => {
    return (
      <div className="banner">
        <img src={backgroundimage} alt="Left side" className="banner-image" />
        <div className="banner-text">
          <h1>Bringing Modern Homes to Life</h1>
          <p>→ Building the House of Your Dreams</p>
          <p>→ Modern House Plans for 20, 39, and Elevations</p>
        </div>
      </div>
    );
  };
  

export default Banner;
