import React from "react";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logoAlternate from '../logologo_laci.svg'; // Import the alternate logo
import './PaymentPage.css';


const PaymentPage = () => {
    return (
        <div>
            <Navbar logo={logoAlternate} customClass="paymentpage-navbar"/>
            <MainContainer />
            <Footer />
        </div>
    );
    }

export default PaymentPage;