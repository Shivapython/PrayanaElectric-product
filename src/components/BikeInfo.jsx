import React from 'react';
import './BikeInfo.css';

const Bikeinfo = ({ specs }) => {
  return (
    <div className="bike-specs">
      <div className="spec">
        <span className="label">TOP SPEED</span>
        <span className="value">{specs.topSpeed}</span>
      </div>
      <div className="spec">
        <span className="label">POWER (PS)</span>
        <span className="value">{specs.power}</span>
      </div>
      <div className="spec">
        <span className="label">MAX. TORQUE</span>
        <span className="value">{specs.maxTorque}</span>
      </div>
      <div className="spec">
        <span className="label">BATTERY LIFE</span>
        <span className="value">{specs.batteryLife}</span>
      </div>
      <div className="spec">
        <span className="label">0 TO 100</span>
        <span className="value">{specs.zeroToHundred}</span>
      </div>
    </div>
  );
};

export default Bikeinfo;