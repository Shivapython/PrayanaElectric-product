import React from 'react';
import { Link } from 'react-router-dom';
import Bikeinfo from './BikeInfo';
import './BikeCard.css'; 


const BikeCard = ({ bike }) => {
  return (
    <div className="bike-card">
      <img src={bike.image} alt={bike.title} className="bike-image" />
      <div className="card-content">
        <h2>{bike.title}</h2>
        {bike.title === 'PRX1' && (
          <div className="top-right-text">
            <p>30 L LARGE BOOTSPACE</p>
            <p>11 KG LIGHT WEIGHT BODY</p>
          </div>
        )}
        {bike.title === 'PRX PRO' && (
          <div className="top-right-text">
            <p>50 KW fast CHARGING</p>
            <p>ONE CLICK AUTO REVERSE </p>
          </div>
        )}
        {bike.title === 'PRX LITE' && (
            <div className="top-right-text">
                <p>UP TO 80 MILES RANGE</p>
                <p>ADVANCED REGEN BRAKING</p>
                </div>
        )}
        {bike.title === 'PRX 2' && (
            <div className="top-right-text">
                <p>POWERFUL PERFORMANCE</p>
                <p>ADVANCED SUSPENSION SYSTEM</p>
                </div>
            )}
        <div className="bike-info">
            <Bikeinfo specs={bike.specs} />
          </div>
          <Link to="/ebikedetails">
          <button>Learn More</button>
        </Link>
      </div>
    </div>

  );
};

export default BikeCard;
