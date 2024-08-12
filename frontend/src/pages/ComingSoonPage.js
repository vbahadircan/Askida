import React from 'react';
import './ComingSoonPage.css'; // Import the CSS file
import logo from '../undraw_development.svg'

const ComingSoonPage = () => {
  return (
    <div className="coming-soon-container">
      <img 
        src={logo}
        alt="Coming Soon" 
        className="center-image"
      />
      <p className="coming-soon-text">
        Uygulamamızı siz değerli kullanıcılarımızla buluşturmak için büyük bir heyecanla çalışıyoruz. Anlayışınız ve sabrınız için teşekkür ederiz!
      </p>
    </div>
  );
}

export default ComingSoonPage;
