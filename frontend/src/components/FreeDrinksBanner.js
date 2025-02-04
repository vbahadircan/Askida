import React, { useEffect, useState } from 'react';
import './FreeDrinksBanner.css';

const FreeDrinksBanner = ({ number, numberColor = 'orange' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = number;
    const duration = 2000; // Duration of the counting effect in milliseconds
    const incrementTime = 50; // Time between each increment in milliseconds

    const increment = (end - start) / (duration / incrementTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        start = end;
      }
      setCount(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(timer);
  }, [number]);

  const numberStyle = {
    color: numberColor,
  };

  return (
    <div className="free-drinks-banner">
      Şu ana kadar <span className="number" style={numberStyle}>{count}</span>'den fazla içecek askıdan alındı
    </div>
  );
};

export default FreeDrinksBanner;