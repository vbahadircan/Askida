import React, { useState } from 'react';
import './MainContainer.css';
import Form from './Form';
import LegalModal from './LegalModal';
import LoadingSpinner from './PaymentLoadingScreen';
import AskidaKahveContainer from './AskidaKahveContainer';

const MainContainer = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone_number: '',
    address: '',
    name: '',
  });

  
  const [donationAmount, setDonationAmount] = useState('');
  const [isLegalModalOpen, setLegalModalOpen] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [iframeToken, setIframeToken] = useState(null); // Store iframe token

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDonationChange = (e) => {
    setDonationAmount(Number(e.target.value));
  };
  

  const openLegalDocuments = () => {
    setLegalModalOpen(true);
  };

  const closeLegalDocuments = () => {
    setLegalModalOpen(false);
  };

  const handleAgreementChange = (e) => {
    setIsAgreed(e.target.checked);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Submitting payment...');


    if (!formData.email) {
      alert('Lütfen bir e-posta adresi giriniz.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert('Lütfen geçerli bir e-posta adresi giriniz.');
      return;
    }

    if (!formData.phone_number) {
      alert('Lütfen bir telefon numarası giriniz.');
      return;
    }

    if (!/^\d{10,15}$/.test(formData.phone_number)) {
      alert('Lütfen geçerli bir telefon numarası giriniz.');
      return;
    }

    if (!isAgreed) {
      alert('Lütfen şartları kabul ediniz.');
      return;
    }

    if (!donationAmount || donationAmount <= 0) {
      alert('Bağış miktarı 0 olamaz. Lütfen geçerli bir bağış miktarı giriniz.');
      return;
    }

    const payload = {
      email: formData.email,
      phone_number: formData.phone_number,
      address: formData.address, // Include address in payload
      name: `${formData.firstName} ${formData.lastName}`,
      price: donationAmount,
    };

    console.log('Sending payload:', payload);
    setLoading(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/payment/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        setLoading(false);
        setIframeToken(data.token); // Set the iframe token after successful payment
      } else {
        alert('Ödeme oluşturma hatası. Lütfen daha sonra tekrar deneyiniz.');
        console.error('Ödeme oluşturma hatası:', data);
      }
    } catch (error) {
      alert('Ağ hatası. Lütfen internet bağlantınızı kontrol edip tekrar deneyiniz.');
      console.error('Ödeme oluşturma hatası:', error);
    } finally {
      console.log('Payment submission completed.');
    }
  };


  if (loading) {
    return <LoadingSpinner />;
  }

  // If the iframe token is available, render the payment screen
  if (iframeToken) {
    return (
      <div className="payment-container">
        <script src="https://www.paytr.com/js/iframeResizer.min.js"></script>
        <iframe
          src={`https://www.paytr.com/odeme/guvenli/${iframeToken}`}
          id="paytriframe"
          style={{ width: '100%', height: '100%' }}
        ></iframe>
        <script>
          iFrameResize({ }, '#paytriframe');
        </script>
      </div>
    );
  }

  return (
<div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Personal Information Form */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <Form 
              formData={formData}
              handleChange={handleChange}
            />
          </div>

          {/* Right Column - Donation Container */}
          <div className="lg:max-w-none">
            <AskidaKahveContainer
              donationAmount={donationAmount}
              handleDonationChange={handleDonationChange}
              isAgreed={isAgreed}
              handleAgreementChange={handleAgreementChange}
              openLegalDocuments={openLegalDocuments}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
      <LegalModal
        isOpen={isLegalModalOpen}
        closeModal={closeLegalDocuments}
        formData={formData}
        donationAmount={donationAmount}
      />
    </div>
  );
};

export default MainContainer;
