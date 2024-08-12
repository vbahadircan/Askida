import React from 'react';
import './WhoPage.css';
import who_page from '../who_page.jpg';

function WhoPage() {
    return (
        <div className="who-page">
            <div className="whopage_text-content">
                <h1 className="whopage_header">Biz Kimiz?</h1>
                <p className="whopage_description">
                    Merhaba! Biz, teknolojiye ve yazılıma tutkuyla bağlı dört kişilik bir arkadaş grubuyuz. Yenilikçi fikirlerimizi hayata geçirirken, samimiyet ve işbirliği bizim için en önemli değerler arasında. Teknoloji dünyasında iz bırakmak ve birlikte büyümek için buradayız.        
                </p>
            </div>
            <div className="whopage_image-container">
                <img src={who_page} alt="Team members together" className="whopage_image" />
            </div>
        </div>
    );
}

export default WhoPage;