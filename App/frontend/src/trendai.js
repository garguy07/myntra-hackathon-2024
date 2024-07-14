// src/TrendAI.js
import React, { useState } from 'react';
import './trendai.css';
import Navbar from './navbar';

function TrendAI() {
  const [garment, setGarment] = useState('');
  const [color, setColor] = useState('');
  const [fabric, setFabric] = useState('');
  const [trend, setTrend] = useState(''); // Define trend state

  const handleFashionateClick = () => {
    // Handle button click logic here
    alert(`Generating fashion idea for: ${garment}, ${color}, ${fabric}, ${trend}`);
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="trendai-page">
        <h1 className='trendai-title'>TrendAI</h1>
        <p className='trendai-subtitle'>
          Choose the type of garment, color, and fabric. Type out the latest trend you have in mind. 
          Click on fashionate to generate your next fashion idea!
        </p>
        <div className="dropdowns">
          <div className="dropdown">
            <label htmlFor="garment" className=''>Garment:</label>
            <select
                id="garment" 
                value={garment} 
                onChange={(e) => setGarment(e.target.value)}
              >
                <option value="">Select Garment</option>
                <option value="shirt">Shirt</option>
                <option value="pants">Pants</option>
                <option value="dress">Dress</option>
                <option value="skirt">Skirt</option>
              </select>
            
          </div>
          <div className="dropdown">
            <label htmlFor="color">Color:</label>
            <select 
              id="color" 
              value={color} 
              onChange={(e) => setColor(e.target.value)}
            >
              <option value="">Select Color</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="black">Black</option>
              <option value="white">White</option>
            </select>
          </div>
          <div className="dropdown">
            <label htmlFor="fabric">Fabric:</label>
            <select 
              id="fabric" 
              value={fabric} 
              onChange={(e) => setFabric(e.target.value)}
            >
              <option value="">Select Fabric</option>
              <option value="cotton">Cotton</option>
              <option value="silk">Satin</option>
              <option value="denim">Denim</option>
              <option value="wool">Polyester</option>
            </select>
          </div>
        </div>
        <div className="trend-input">
          <label htmlFor="trend">Enter the trend:</label>
          <input 
            type="text"
            id="trend" 
            value={trend} 
            onChange={(e) => setTrend(e.target.value)} 
            placeholder="For example, Barbie..."
          />
        </div>

        <button className="fashionate-button" onClick={handleFashionateClick}>
          Fashionate
        </button>
      </div>
    </>
  );
}

export default TrendAI;
