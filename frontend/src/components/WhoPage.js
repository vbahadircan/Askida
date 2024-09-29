import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './WhoPage.css';
import who_page from '../assets/images/who_page.webp';

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
                <LazyLoadImage
                    src={who_page}
                    alt="Team members together"
                    className="whopage_image"
                />            
            </div>
        </div>
    );
}

export default WhoPage;