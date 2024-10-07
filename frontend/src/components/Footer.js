import React from 'react';
import './Footer.css';
import logo from '../assets/images/logo_beyaz.webp';
import askida_icon from '../assets/images/askida_icon.webp';
import paytrfooter from '../assets/images/paytr-footer.webp';
import app_store from '../assets/images/app_store.webp';
import play_store from '../assets/images/play_store.webp';

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
            <a href="https://www.paytr.com/" target="_blank" rel="noopener noreferrer">
              <img src={paytrfooter} alt="Iyzico Logo" className="payment-logo" />
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
              <li><a href="/mesafeli-satis-sozlesmesi">Mesafeli Satış Sözleşmesi</a></li>
              <li><a href="/iptal-ve-iade-kosullari">İptal ve İade Koşulları</a></li>
              <li><a href="/uyelik-ve-kullanim-sartlari">Üyelik ve Kullanım Şartları</a></li>
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