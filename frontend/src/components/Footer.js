import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../logo_beyaz.png';
import app_store from '../app_store.png';
import play_store from '../play_store.png';

const Footer = () => {
  // const googlePlayUrl = 'https://play.google.com/store/apps/details?id=com.example.app';
  // const appStoreUrl = 'https://apps.apple.com/us/app/example-app/id123456789';

  const handleGooglePlayClick = () => {
    window.location.href = '/404';
  };

  const handleAppStoreClick = () => {
    window.location.href = '/404';
  };

  return (
    <footer>
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>      
      </div>
      <div className="contact-info">
        <p>İLETİŞİM</p>
        <p><a href="mailto:info@asunatech.com">info@asunatech.com</a></p>
        <p><a href="/gizlilik-politikasi">Gizlilik Politikası</a></p>
        <p>© 2024 asunatech.com Tüm hakları saklıdır</p>
      </div>
      <div className="store-links">
        <div className="store-icons">
          <img src={app_store} alt="App Store" onClick={handleAppStoreClick} />
          <img src={play_store} alt="Play Store" onClick={handleGooglePlayClick} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

