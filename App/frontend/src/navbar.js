// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from './assets/myntra-logo.png'; // Adjust the path if necessary

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className='Myntra'>
        <Link to="/">
          <button className="Myntra">Myntra</button>
        </Link>
      </div>
      <div className="navbar-container">
        <Link to="/">
          <button className="navbar-title">Style.AI</button>
        </Link>
      </div>
      <div className="navbar-buttons">
        <Link to="/trendai">
          <button className="navbar-button">TrendAI</button>
        </Link>
        <Link to="/tryon">
          <button className="navbar-button">TryOn</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
