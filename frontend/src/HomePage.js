// src/HomePage.js

import React, { useRef } from 'react';
import './HomePage.css';
import FreeDrinksBanner from './components/FreeDrinksBanner';
import WhatPage from './components/WhatPage';
import Navbar from './components/Navbar'; // Import the Navbar component
import AskidanAl from './components/AskidanAl';
import AskiyaBirak from './components/AskiyaBirak';
import Footer from './components/Footer';
import logo from './logo_beyaz.png';

function HomePage() {
  const numberOfFreeDrinks = 0; // Replace this with the actual number of free drinks
  
  const freeDrinksBannerRef = useRef(null);
  const askidanAlRef = useRef(null);


  const handleDiscoverClick = () => {
    freeDrinksBannerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleHowItWorksClick = () => {
    askidanAlRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-page">
      <div className="home-background-image">
        <Navbar logo={logo}/>
        <div className="home-text-container">
          <h1 className="askida-text">ASKIDA</h1>
          <p className="home-subtext">“Bir kahve de askıya”</p>
          <button className="discover-button" onClick={handleDiscoverClick}>Keşfet</button>
        </div>
      </div>
      <div ref={freeDrinksBannerRef}>
        <FreeDrinksBanner 
          number={numberOfFreeDrinks} 
          numberColor="orange" 
        />
      </div>
      <WhatPage onHowItWorksClick={handleHowItWorksClick} />
      <div ref={askidanAlRef}>
        <AskidanAl />
      </div>
      <AskiyaBirak />
      <Footer />
    </div>
  );
}

export default HomePage;
