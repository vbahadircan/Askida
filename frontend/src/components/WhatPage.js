import React from 'react';
import './WhatPage.css';

function WhatPage({ onHowItWorksClick }) {
  return (
    <div className="what-page">
      <div>
        <h1 className="header">Askıda Nedir?</h1>
        <p className="description">
          Askıda, öğrencilerin ve kafe müdavimlerinin sosyal dayanışma içinde olmasını sağlayan yenilikçi bir mobil uygulamadır.
        </p>
        <button className="how-it-works-button" onClick={onHowItWorksClick}>Nasıl Çalışır ?</button>
      </div>
    </div>
  );
}

export default WhatPage;
