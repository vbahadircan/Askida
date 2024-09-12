import React, { useState, useRef } from 'react';
import './MainContainer.css';
import DrinkButton from './DrinkButton';
import OrderSummary from './OrderSummary';
import Form from './Form'; // Import the Form component

import teaIconOrange from '../icons/tea-orange.svg';
import coffeeIconOrange from '../icons/coffee-orange.svg';
import icedCoffeeIconOrange from '../icons/iced-coffee-orange.svg';

const MainContainer = () => {
  const [items, setItems] = useState([]);
  const drinkButtonRefs = useRef({});

  // Update order items
  const updateItems = (name, price, quantity) => {
    let updatedItems = [...items];
    const itemIndex = updatedItems.findIndex(item => item.name === name);

    if (itemIndex !== -1) {
      if (quantity === 0) {
        updatedItems.splice(itemIndex, 1); // Remove item if quantity is zero
      } else {
        updatedItems[itemIndex].quantity = quantity;
      }
    } else {
      updatedItems.push({ name, price, quantity });
    }

    setItems(updatedItems);
  };

  // Delete item from order
  const deleteItem = (name) => {
    const updatedItems = items.filter(item => item.name !== name);
    setItems(updatedItems);
    if (drinkButtonRefs.current[name]) {
      drinkButtonRefs.current[name].resetCounter();
    }
  };

  // Handle form submission
  const handleFormSubmit = (formData) => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="main-container">
      <div className="top-container">
        <div className="left-container">
          <DrinkButton
            ref={el => drinkButtonRefs.current["Çay"] = el}
            drinkName="Çay"
            drinkPrice={5}
            icon={teaIconOrange}
            updateItems={updateItems}
          />
          <DrinkButton
            ref={el => drinkButtonRefs.current["Kahve"] = el}
            drinkName="Kahve"
            drinkPrice={20}
            icon={coffeeIconOrange}
            updateItems={updateItems}
          />
          <DrinkButton
            ref={el => drinkButtonRefs.current["Soğuk Kahve"] = el}
            drinkName="Soğuk Kahve"
            drinkPrice={30}
            icon={icedCoffeeIconOrange}
            updateItems={updateItems}
          />
        </div>
        <div className="right-container">
          <OrderSummary items={items} deleteItem={deleteItem} />
        </div>
      </div>
      <div className="bottom-container">
        <Form onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default MainContainer;