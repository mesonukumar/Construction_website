import React from 'react';
import './Card.css'; // Ensure this CSS file exists for additional styling

const Card = ({ image, title, text }) => {
  return (
    <div className="card" style={{ width: '18rem', margin: '20px' }}>
      <img className="card-img-top" src={image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default Card;
