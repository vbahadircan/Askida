// src/components/QrCodeGenerator.js

import React, { useState } from 'react';
import './QrCodeGenerator.css';
import QRCode from 'qrcode.react';
import app_store from '../app_store.png';
import play_store from '../play_store.png';

const QrCodeGenerator = () => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [productCount, setProductCount] = useState(0);

  const selectProduct = (product) => {
    if (selectedProduct !== product) {
      setSelectedProduct(product);
      setProductCount(1); // Set initial count to 1 when a product is selected
    }
  };

  const incrementCount = () => {
    if (selectedProduct) {
      setProductCount(productCount + 1);
    }
  };

  const decrementCount = () => {
    if (selectedProduct && productCount > 1) {
      setProductCount(productCount - 1);
    }
  };

  const generateTransactionId = () => {
    // Generate a random UUID and remove hyphens
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    }).replace(/-/g, '');
  };

  const getSelectedProductCode = () => {
    switch (selectedProduct) {
      case 'tea':
        return 1;
      case 'hotCoffee':
        return 2;
      case 'icedCoffee':
        return 3;
      default:
        return '';
    }
  };

  const qrString = `anonimouswebuser-61736b697961626972616b-${getSelectedProductCode()}-${productCount}-${generateTransactionId()}`;

  const googlePlayUrl = 'https://play.google.com/store/apps/details?id=com.example.app';
  const appStoreUrl = 'https://apps.apple.com/us/app/example-app/id123456789';

  const handleGooglePlayClick = () => {
    window.location.href = googlePlayUrl;
  };

  const handleAppStoreClick = () => {
    window.location.href = appStoreUrl;
  };

  return (
    <div className="App">
      <div className="content">
        <div className="qr-code-container">
          <QRCode value={qrString} size={256} fgColor="#FF0000" /> {/* Orange color */}
        </div>
        <div className="button-container">
          <button
            className={`round-button ${selectedProduct === 'tea' ? 'active' : ''}`}
            onClick={() => selectProduct('tea')}
          >
            <span role="img" aria-label="tea">🍵</span> Çay
          </button>
          <button
            className={`round-button ${selectedProduct === 'hotCoffee' ? 'active' : ''}`}
            onClick={() => selectProduct('hotCoffee')}
          >
            <span role="img" aria-label="coffee">☕</span> Kahve
          </button>
          <button
            className={`round-button ${selectedProduct === 'icedCoffee' ? 'active' : ''}`}
            onClick={() => selectProduct('icedCoffee')}
          >
            <span role="img" aria-label="iced coffee">🥤</span> Soğuk Kahve
          </button>
        </div>
        <div className="counter-container">
          <button className="counter-button" onClick={decrementCount}>-</button>
          <span className="count">{productCount}</span>
          <button className="counter-button" onClick={incrementCount}>+</button>
        </div>
        <img src={play_store} alt="Play Store" style={{ height: '40px', margin: '10px 0', cursor: 'pointer' }} onClick={handleGooglePlayClick} />
        <img src={app_store} alt="App Store" style={{ height: '40px', margin: '5px 0', cursor: 'pointer' }} onClick={handleAppStoreClick} />
      </div>
    </div>
  );
};

export default QrCodeGenerator;
