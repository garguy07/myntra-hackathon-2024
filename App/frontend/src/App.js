import React from 'react';
import Navbar from './navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="landing-page">
        <div className='landing-page-title'>Style.AI</div>
        <div className='landing-page-subtitle'>Generate fashion your way.</div>
      </div>
    </div>
  );
}

export default App;
