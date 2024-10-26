import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { FiPhone } from "react-icons/fi"; // Import the phone icon
import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-gradient-navbar ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="MyApp Logo"
            style={{ height: "50px", width: "70px", marginRight: "15px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/groupOfTeam">
                Group Of Team
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/carriers">
                Carriers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="navbar-nav">
            <span className="nav-link phone-number">
              <FiPhone style={{ marginRight: "10px" }} />
              +91 7808386051
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
