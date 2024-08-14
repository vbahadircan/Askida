import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from '../logo_beyaz.png';
import './AccDeletionPage.css';
import styles from './GizlilikPage.module.css';

const AccDeletionPage = () => {
  return (
    <div className="acc-deletion-page">
      <Navbar logo={logo} customClass={styles.customNavbar} 
      /> {/* Apply custom class */}
      <div className="acc-deletion-content">
        <h2>
          Uygulama üzerinden verilerinizi silme veya hesabınızı kapatma gibi konularda sorun yaşıyorsanız{' '}
          <a href="mailto:info@asunatech.com">info@asunatech.com</a> adresinden bizimle iletişime geçebilirsiniz.
        </h2>
      </div>
      <Footer />
    </div>
  );
};

export default AccDeletionPage;