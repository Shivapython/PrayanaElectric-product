// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <img src={require('../image/logo.png')} alt="Prayana Electric Logo" className="logo" />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/ebikedetails">Products</Link></li>
          <li><Link to="/error">Gallery</Link></li>
          <li><Link to="/error">About Us</Link></li>
          <li><Link to="/error">TeamInfo</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
