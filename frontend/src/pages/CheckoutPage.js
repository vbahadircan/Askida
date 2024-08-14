import React from 'react';
import './CheckoutPage.css';
import video from '../checkout_video.mp4';

function CheckoutPage() {

    const handleDiscoverClick = () => {
        window.location.href = '/askida';
    };

    return (
        <div className="checkout-page">
            <div className="video-container">
                <video className="checkout-video" src={video} autoPlay muted loop />
            </div>
            <div className="text-container">
                <h1 className="checkout-headline">Askıda</h1>
                <p className="checkout-description">
                Topluluk bilincini arttıran ve sosyal etkileşimi destekleyen askıda mobil uygulamamıza göz atın!</p>
                <div className="checkout-button-container">
                    <button className="checkout-discover-button" onClick={handleDiscoverClick}>Gözat</button>
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;