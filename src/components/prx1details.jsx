
import React, { useState, useEffect } from 'react';
import './index.css';
import NumberCounter from 'number-counter';
import Footer from '../Footer';

const App = () => {
    const [color, setColor] = useState('green');
    const [imageIndex, setImageIndex] = useState(0);
  
    const handleColorChange = (color) => {
      setColor(color);
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % 2); 
        setColor((prevColor) => (prevColor === 'green'? 'ed' : 'green'));
      }, 2000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div>
        <img src="../image/logo.png" alt="Company Logo" className="header" style={{ width: '216px', height: '86px' }} />
        <div className="nav-buttons flex space-x-4 p-4">
          {['HOME', 'PRODUCTS', 'GALLERY', 'ABOUT US', 'TEAM INF0'].map((text) => (
            <button key={text} className="nav-button">{text}</button>
          ))}
        </div>
        <h1 className="main-title">PrayanaElectric's</h1>
        <h2 className="prx-title">PRX-1</h2>
        <img src={`/scooter-${color}.png`} alt="../image/logo.png" className="main-image" />
        <p className="paragraph rounded-[calc(1.5rem-1px)] p-10 bg-gray-100 dark:bg-gray-900">
          Introducing the PRX-11, a revolutionary e-scooter designed for the modern urban commuter.<br />
          With its sleek design, powerful motor, and long-lasting battery,<br />
          The PRAYANA electric's PRX-1 offers an unparalleled riding experience. Enjoy smooth<br />
          and efficient travel with eco-friendly technology that keeps you on the go.<br />
          Discover the future of urban mobility with the PRX-1, where innovation meets sustainability.
        </p>
        <h3 className="choose-color">Choose Color</h3>
        <div className="g1">
          <div className={`red-button ${color === 'ed'? 'active' : ''}`} onClick={() => handleColorChange('red')}></div>
          <div className={`green-button ${color === 'green'? 'active' : ''}`} onClick={() => handleColorChange('green')}></div>
        </div>
        <h3 className="features1">3L BOOTSPACE <br />11 KG LIGHT WEIGHT BODY</h3>
        
        <div className="speed">
          <span className="topspeed">TOP SPEED</span>
          <span className="value1">
            <NumberCounter end={120} start={20} delay='1' />
            <span className="unit1">km/h</span>
          </span>
        </div>
        
        <div className="power">
          <span className="POWER">POWER</span>
          <span className="value2">
            <NumberCounter end={385} start={285} delay='2' />
            <span className="unit2">PS</span>
          </span>
        </div>
        
        <div className="torque">
          <span className="maxtorque">MAX.TORQUE</span>
          <span className="value3">
            <NumberCounter end={450} start={200} delay='2' />
            <span className="unit3">NM</span>
          </span>
        </div>
        
        <div className="battery">
          <span className="batterylife">BATTERY LIFE</span>
          <span className="value4">
            <NumberCounter end={200} start={100} delay='2' />
            <span className="unit4">KM</span>
          </span>
        </div>
        
        <div className="zerotohun">
          <span className="0to100">0 to 100</span>
          <span className="value5">
            <NumberCounter end={24} start={0} delay='1' />
            <span className="unit5">s</span>
          </span>
        </div>
      </div>
      
    );
  };
  
  export default App;