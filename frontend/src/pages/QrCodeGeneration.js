// src/pages/QrCodeGeneration.js

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logoAlternate from '../logologo_laci.jpg'; // Import the alternate logo
import './QrCodeGeneration.css';
import QRCode from 'qrcode.react';
import app_store from '../app_store.png';
import play_store from '../play_store.png';


function QrCodeGeneration() {
    
  const [selectedProduct, setSelectedProduct] = React.useState('');
  const [productCount, setProductCount] = React.useState(0);

  const selectProduct = (product) => {
    if (selectedProduct !== product) {
      setSelectedProduct(product);
      setProductCount(1);
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

  return (
    <div className="qrCodeGeneration-page">
      <Navbar logo={logoAlternate} customClass="qrCodeGeneration-navbar" />
      <div className="main-content">
        <div className="left-content">
          <h1 className="askida-title">Askıya Bırak</h1>
          <ol className="steps-list">
            <li>1- Ürün Tipini Seçin</li>
            <li>2- Ürün Miktarını Seçin</li>
            <li>3- QR Kodu Taratın!</li>
          </ol>
          <img
            src={play_store}
            alt="Google Play"
            className="store-icon"
            onClick={() => window.location.href = 'https://play.google.com/store/apps/details?id=com.example.app'}
          />
          <img
            src={app_store}
            alt="App Store"
            className="store-icon"
            onClick={() => window.location.href = 'https://apps.apple.com/us/app/example-app/id123456789'}
          />
        </div>
        <div className="qr-code-section">
          <div className="qr-code-container">
            <QRCode value={qrString} size={256} fgColor="#F57C00" /> {/* Orange color */}
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default QrCodeGeneration;
