// src/App.js
import React from 'react';
import Navbar from './navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import img1 from './assets/red_dress.jpg';
import img2 from './assets/virtual_tryon.jpg';
import TrendAI from './trendai';
import TryOn from './tryon';

function Home() {
  return (
    <>
      <Navbar />
      <div className="landing-page">
        <div className='landing-page-title'>Style.AI</div>
        <div className='landing-page-subtitle'>Generate fashion your way.</div>
      </div>
      <div className="scrollable-page">
        <div className="text-container">
          <h1>Create designs based on latest trends.</h1>
          <p>Input the type of garment you want to generate designs for along with a couple of other specifications and let TrendAI do its magic.</p>
          <div className="button1-container">
            <Link to="/trendai">
              <button className="button1">GO TO TRENDAI</button>
            </Link>
          </div>
        </div>
        <div className="image-container">
          <img src={img1} alt="Sample" className="right-side-image" />
        </div>
      </div>
      <div className="scrollable-page-2">
        <div className="image-container">
          <img src={img2} alt="Sample" className="right-side-image" />
        </div>
        <div className="text-container">
          <h1>Imagining how it would look on you?</h1>
          <p>Thinking about how a dress would look on you? Try the virtual try-on. Upload a full length image of yours and choose a garment from our collection to get to try it out, all within the comfort of your home.</p>
          <div className="button1-container">
            <Link to="/tryon">
              <button className="button1">GO TO TRYON</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trendai" element={<TrendAI />} />
        <Route path="/tryon" element={<TryOn />} />
      </Routes>
    </Router>
  );
}

export default App;
