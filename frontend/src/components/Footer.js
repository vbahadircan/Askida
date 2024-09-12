import React from 'react';
import './Footer.css';
import logo from '../logo_beyaz.png';
import askida_icon from '../askida_icon.svg';
import iyzicofooter from '../iyzicofooter.svg';
import app_store from '../app_store.png';
import play_store from '../play_store.png';

const Footer = () => {
  const handlePlayStoreClick = () => {
    window.location.href = '/404';
  };

  const handleAppStoreClick = () => {
    window.location.href = '/404';
  };


  return (
    <div>
      <footer className="footer">
        <div className="footer-left">
          <div className="logos">
            <img src={logo} alt="Asunatech Logo" className="asunatech-logo" />
            <img src={askida_icon} alt="Asunatech Logo" className="askida_icon" />
          </div>
          <div className="payment-logos">
            <a href="https://www.iyzico.com" target="_blank" rel="noopener noreferrer">
              <img src={iyzicofooter} alt="Iyzico Logo" className="payment-logo" />
            </a>
          </div>

          <div className="app-stores">
            <img src={play_store} alt="Play Store" className="store-icon" onClick={handlePlayStoreClick} />
            <img src={app_store} alt="App Store" className="store-icon" onClick={handleAppStoreClick} />
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-column">
            <h4>Kişisel Verilerin Korunması</h4>
            <ul>
              <li><a href="/gizlilik-politikasi">Gizlilik Politikası</a></li>
              <li><a href="/gizlilik-politikasi">Mesafeli Satış Sözleşmesi</a></li>
              <li><a href="/gizlilik-politikasi">İptal ve İade Koşulları</a></li>
              <li><a href="/gizlilik-politikasi">Çerez Politikası</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Asunatech</h4>
            <ul>
              <li><a href="/">Hakkımızda</a></li>
              <li><a href="7">İletişim</a></li>
              <li><a href="mailto:info@asunatech.com">info@asunatech.com</a></li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <p>© 2024 asunatech.com Tüm hakları saklıdır</p>
      </div>
    </div>
  );
};

export default Footer;