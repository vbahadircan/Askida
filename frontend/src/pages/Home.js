// src/pages/Home.js
import React from 'react';
import './Home.css'; // Create and import the corresponding CSS for styling
import coffeeMugImage from '../images/coffee_mug_hang.png';

const Home = () => {
  return (
    <div className="home">
      <div className="main-section">
        <div className="text-container">
          <h1>Askıda</h1>
          <p>Bir kahve de askıya</p>
        </div>
          <div className="image-container">
            <img src={coffeeMugImage} alt="Askıda" />        
          </div>
      </div>
      <div className="stats-section">
        <p>..... students got free coffee</p>
      </div>
    </div>
  );
};

export default Home;
