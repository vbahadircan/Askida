import React, { useState, forwardRef, useImperativeHandle } from 'react';
import './DrinkButton.css';

// DrinkButton Component
const DrinkButton = forwardRef(({ drinkName, drinkPrice, icon, updateItems }, ref) => {
  const [count, setCount] = useState(0);

  // Handlers for increasing or decreasing count
  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    updateItems(drinkName, drinkPrice, newCount);
  };

  const decrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      updateItems(drinkName, drinkPrice, newCount);
    }
  };

  // Reset counter to zero
  useImperativeHandle(ref, () => ({
    resetCounter() {
      setCount(0);
    }
  }));

  return (
    <div className="drink-button">
      <div className="drink-info">
        <img src={icon} alt={`${drinkName} icon`} className="drink-icon" />
        <span>{drinkName}</span>
      </div>
      <div className="counter">
        <button onClick={decrement} className="btn-decrement">-</button>
        <span>{count}</span>
        <button onClick={increment} className="btn-increment">+</button>
      </div>
    </div>
  );
});

export default DrinkButton;