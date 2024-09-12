import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import './Landing.css';
import Navbar from './components/Navbar'; // Import the Navbar component
import Footer from './components/Footer';
import logob from './logo_beyaz.svg';
import logos from './logo_beyaz.png';
import icon_down from './arrow_down.svg'; // Import the arrow icon
import CheckoutPage from './pages/CheckoutPage'; // Import the CheckoutPage component
import TeamSlider from './components/TeamSlider';
import WhoPage from './components/WhoPage';

function Landing() {
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);

    const checkoutPageRef = useRef(null);

    const handleArrowClick = () => {
        checkoutPageRef.current.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <div className="landing-page">
            <Helmet>
                <title>Asunatech</title>
                <meta name="description" content="Asunatech, web ve mobil çözümlerde uzmanlaşmış, son teknoloji yazılım geliştirme hizmetleri sunar. İşletmenizi yükseltmek için yenilikçi teknoloji çözümlerimizi keşfedin." />
            </Helmet>
            <div className="landing-background-image">
                <Navbar logo={logos} />
                <div className="landing-text-container">
                    <img src={logob} alt="askida-logo" className="landing-logo" />
                    <p className="landing-subtext">"Hep Beraber!"</p>
                </div>
                <img src={icon_down} alt="scroll down" className="scroll-down-icon" onClick={handleArrowClick} />
            </div>
            <div ref={checkoutPageRef} className="checkout-page">
                <CheckoutPage />
            </div>
            <div>
                <WhoPage />
            </div>
            <TeamSlider />
            <Footer />
        </div>
    );
}

export default Landing;