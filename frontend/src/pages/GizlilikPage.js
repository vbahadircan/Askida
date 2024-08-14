// src/pages/GizlilikPage.js

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './GizlilikPage.module.css';
import './GizlilikPage.css';
import logo from '../logo_beyaz.png';

const GizlilikPage = () => {
  return (
    <div className="gizlilik-page">
      <Navbar logo={logo} customClass={styles.customNavbar} 
      /> {/* Apply custom class */}
      <div className="gizlilik-content">
        <h1>Gizlilik Politikası</h1>
        <p>
          Asunatech olarak, kullanıcılarımızın gizliliğine büyük önem veriyoruz. Bu gizlilik politikası, kişisel bilgilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
        </p>
        <p>
          Kişisel bilgileriniz, yalnızca size daha iyi hizmet sunabilmek amacıyla kullanılacaktır. Bu bilgiler, üçüncü şahıslarla paylaşılmayacak ve güvenli bir şekilde saklanacaktır.
        </p>
        <p>
          Gizlilik politikamız hakkında daha fazla bilgi almak için bizimle iletişime geçebilirsiniz.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default GizlilikPage;