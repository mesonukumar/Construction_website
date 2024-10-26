import React from "react";
import "./Carousel.css";
import carousel1 from "../assets/carousel1.jpg"; 
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";
import carousel4 from "../assets/carousel4.jpg";
import carousel5 from "../assets/carousel5.jpg";
import carousel6 from "../assets/carousel6.jpg";

const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="1000"
    >
      <ol className="carousel-indicators">
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
        ></li>
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
        ></li>
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
        ></li>
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
        ></li>
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
        ></li>
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="5"
        ></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={carousel1} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={carousel2} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={carousel3} alt="Third slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={carousel4} alt="Fourth slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={carousel5} alt="Fifth slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={carousel6} alt="Sixth slide" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
