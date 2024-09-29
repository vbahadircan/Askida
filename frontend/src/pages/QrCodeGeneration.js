// src/pages/QrCodeGeneration.js

import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logoAlternate from '../logologo_laci.svg'; // Import the alternate logo
import './QrCodeGeneration.css';
import QRCode from 'qrcode.react';
import app_store from '../assets/images/app_store.webp';
import play_store from '../assets/images/play_store.webp';
import teaIconGrey from '../icons/tea-grey.svg';
import teaIconOrange from '../icons/tea-orange.svg';
import coffeeIconGrey from '../icons/coffee-grey.svg';
import coffeeIconOrange from '../icons/coffee-orange.svg';
import icedCoffeeIconGrey from '../icons/iced-coffee-grey.svg';
import icedCoffeeIconOrange from '../icons/iced-coffee-orange.svg';

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
      <Helmet>
        <title>Askıya Bırak</title>
        <meta name="description" content="Asunatech'in Askıya Bırak sayfası ile kolayca QR kodlar oluşturun ve askıya kahve bırakın." />
      </Helmet>
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
            onClick={() => window.location.href = '/404'}
          />
          <img
            src={app_store}
            alt="App Store"
            className="store-icon"
            onClick={() => window.location.href = '/404'}
          />
        </div>
        <div className="qr-code-section">
          <div className="qr-code-container">
            <QRCode value={qrString} size={256} fgColor="#000000" bgColor="#FFFFFF"/> {/* Orange color */}
          </div>
          <div className="button-container">
            <button
          className={`round-button tea ${selectedProduct === 'tea' ? 'active' : ''}`}
          onClick={() => selectProduct('tea')}
        >
          <img
            src={selectedProduct === 'tea' ? teaIconOrange : teaIconGrey}
            alt="Tea"
            className="button-icon"
          />
          <span>Çay</span>
        </button>
        <button
          className={`round-button hotCoffee ${selectedProduct === 'hotCoffee' ? 'active' : ''}`}
          onClick={() => selectProduct('hotCoffee')}
        >
          <img
            src={selectedProduct === 'hotCoffee' ? coffeeIconOrange : coffeeIconGrey}
            alt="Coffee"
            className="button-icon"
          />
          <span>Kahve</span>
        </button>
        <button
          className={`round-button icedCoffee ${selectedProduct === 'icedCoffee' ? 'active' : ''}`}
          onClick={() => selectProduct('icedCoffee')}
        >
          <img
            src={selectedProduct === 'icedCoffee' ? icedCoffeeIconOrange : icedCoffeeIconGrey}
            alt="Iced Coffee"
            className="button-icon"
          />
          <span>Soğuk Kahve</span>
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
