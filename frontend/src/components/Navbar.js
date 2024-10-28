// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

function Navbar({ logo, customClass, textColor = '#fff', backgroundColor = 'transparent' }) {
  const handleDownloadClick = () => {
    const googlePlayUrl = 'https://play.google.com/store/apps/details?id=com.asunatech.askda&hl=tr';
    const appStoreUrl = 'https://apps.apple.com/tr/app/ask%C4%B1da/id6642640155?l=tr&platform=iphone';

    if (/android/i.test(navigator.userAgent)) {
      window.location.href = googlePlayUrl;
    } else if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
      window.location.href = appStoreUrl;
    } else {
      window.location.href = googlePlayUrl;
    }
  };

  return (
    <nav className={`navbar ${customClass}`} style={{ backgroundColor }}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <ul className="nav-links" style={{ color: textColor }}>
        <li><Link to="/about" style={{ color: textColor }}>Hakkımızda</Link></li>
        <li><a href="mailto:info@asunatech.com" style={{ color: textColor }}>İletişim</a></li>
        <li><Link to="/askida" style={{ color: textColor }}>ASKIDA</Link></li>
      </ul>
      <button className="download-button" onClick={handleDownloadClick}>
        Askıda'yı İndirin
      </button>
    </nav>
  );
}
export default Navbar;
