// src/components/AskıdanAl.js

import React from 'react';
import phoneImage from '../assets/images/al.webp';
import './AskidanAl.css';

const AskidanAl = () => {
  return (
    <div className="askidanAl-container">
      <h1 className="askidanAl-header">
        Askıdan Al
      </h1>
      <ol className="askidanAl-list">
        <li>Uygulamayı indirin ve "Askıdan Al" seçeneğine tıklayın.</li>
        <li>Almak istediğiniz ürünü seçin ve Qr kodu taratın.</li>
        <li>Ürününüzü alıp keyfini çıkarın!</li>
      </ol>
      <img src={phoneImage} alt="Phone displaying app" className="askidanAl-image" />
    </div>
  );
};

export default AskidanAl;
