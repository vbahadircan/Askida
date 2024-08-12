// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

function Navbar({ logo, customClass }) {
  const handleDownloadClick = () => {
    // const googlePlayUrl = 'https://play.google.com/store/apps/details?id=com.example.app';
    // const appStoreUrl = 'https://apps.apple.com/us/app/example-app/id123456789';

    // if (/android/i.test(navigator.userAgent)) {
    //   window.location.href = googlePlayUrl;
    // } else if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
    //   window.location.href = appStoreUrl;
    // } else {
    //   window.location.href = googlePlayUrl;
    // }
    window.location.href = '/404';

  };

  return (
    <nav className={`navbar ${customClass}`}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><a href="/">Hakkımızda</a></li>
        <li><a href="mailto:info@asunatech.com">İletişim</a></li>
        <li><a href="/askida">ASKIDA</a></li>
      </ul>
      <button className="download-button" onClick={handleDownloadClick}>
        Askıda'yı İndirin
      </button>
    </nav>
  );
}

export default Navbar;
