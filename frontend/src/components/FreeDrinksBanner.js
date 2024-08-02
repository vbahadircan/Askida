import React from 'react';
import './FreeDrinksBanner.css';

const FreeDrinksBanner = ({ number, numberColor = 'orange', numberSize = 'inherit' }) => {
  const numberStyle = {
    color: numberColor,
    fontSize: numberSize,
  };

  return (
    <div className="free-drinks-banner">
      Şu ana kadar <span className="number" style={numberStyle}>{number}</span> bedava içecek askıdan alındı
    </div>
  );
};

export default FreeDrinksBanner;