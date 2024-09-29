// frontend/src/pages/PaymentStatusPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import successIcon from '../assets/images/success-icon.webp'; // Add a success icon
import failureIcon from '../assets/images/failure-icon.webp'; // Add a failure icon
import logoAlternate from '../assets/images/logologo_laci.webp'; // Add an alternate logo
import './PaymentStatusPage.css';

const PaymentStatusPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const status = queryParams.get('status');

  return (
    <div className="payment-status-page">
      <Navbar
        logo={logoAlternate}
        textColor="#042440" // Change text color
        backgroundColor="#f8f8f8" // Change background color
      />
      <div className="status-container">
        {status === 'success' ? (
          <div className="status-message success">
            <img src={successIcon} alt="Success" className="status-icon" />
            <h2 className="status-title">Ödeme Başarılı</h2>
            <p className="status-description">Ödeme işleminiz gerçekleşmiştir. Bağışınız için teşekkür ederiz</p>
            <button className="status-button" onClick={() => window.location.href = '/askida'}>Askıda'ya Dön</button>
          </div>
        ) : (
          <div className="status-message failure">
            <img src={failureIcon} alt="Failure" className="status-icon" />
            <h2 className="status-title">Ödeme Gerçekleştirilemedi</h2>
            <p className="status-description">Ödemenizle ilgili bir problem oluştu. Lütfen tekrar deneyiniz</p>
            <button className="status-button" onClick={() => window.location.href = '/askida/askiya-birak/uzaktan'}>Tekrar Dene</button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default PaymentStatusPage;