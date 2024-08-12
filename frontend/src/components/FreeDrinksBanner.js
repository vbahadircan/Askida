import React from 'react';
import './FreeDrinksBanner.css';

const FreeDrinksBanner = ({ number, numberColor = 'orange' }) => {
  const numberStyle = {
    color: numberColor,
  };

  return (
    <div className="free-drinks-banner">
      Şu ana kadar <span className="number" style={numberStyle}>{number}</span> bediçecek askıdan alındı
    </div>
  );
};

export default FreeDrinksBanner;