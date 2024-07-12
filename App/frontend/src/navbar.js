import React from 'react';
import './navbar.css';
import logo from './assets/myntra-logo.png'; // Adjust the path if necessary

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-title">Style.AI</div>
      <div className="navbar-buttons">
        <button className="navbar-button">TrendAI</button>
        <button className="navbar-button">TryOn</button>
      </div>
    </nav>
  );
}

export default Navbar;
