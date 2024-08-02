// src/components/AskıyaBırak.js

import React from 'react';
import phoneImage from '../birak.png';
import './AskiyaBirak.css';

const AskiyaBirak = () => {
  return (
    <div className="askiyaBirak-container">
      <h1 className="askiyaBirak-header">
        Askıya Bırak
      </h1>
      <ol className="askiyaBirak-list">
        <li>Uygulamayı indirin veya <a href="/askiya-birak">bu linkten</a> askıya bırak seçeneğine gidin.</li>
        <li>Bırakmak istediğiniz ürünü ve adedi seçin.</li>
        <li>Ödemenizi yapın ve QR kodu taratın.</li>
      </ol>
      <img src={phoneImage} alt="Phone displaying app" className="askiyaBirak-image" />
    </div>
  );
};

export default AskiyaBirak;
