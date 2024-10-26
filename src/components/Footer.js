import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Mdimage from "../assets/Mdimage.jpg";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <div className="md-title">
            <h2>MD of the Team</h2>
          </div>
          <div className="md-info">
            <img src={Mdimage} alt="MD of the Team" className="md-image" />
            <div className="md-details">
              <h3>Deepak Kumar</h3>
              <h6>Managing Director</h6>
              <p>
                He is an experienced leader overseeing the team's operations and
                projects.
              </p>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/groupOfTeam">Group Of Team</Link>
            </li>
            <li>
              <Link to="/carriers">Carriers</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: <br/>deepakarn2007@gmail.com<br/>deepakinfragroup1@gmail.com</p>
          <p>Phone:<br/> +91 7808386051<br/> +91 8434950317</p>
        </div>
      </div>
      <div className="footer-social">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </Link>
          <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </Link>
          <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </Link>
          <Link to="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </Link>
          <Link to="https://wa.me/7808386051" target="_blank" rel="noopener noreferrer">
          <BsWhatsapp /> 
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
