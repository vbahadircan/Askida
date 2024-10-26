import React, { useState, useRef, useCallback } from 'react';
import './MainContainer.css';
import DrinkButton from './DrinkButton';
import OrderSummary from './OrderSummary';
import Form from './Form';
import LegalModal from './LegalModal'; 
import teaIconOrange from '../icons/tea-orange.svg';
import coffeeIconOrange from '../icons/coffee-orange.svg';
import icedCoffeeIconOrange from '../icons/iced-coffee-orange.svg';
import LoadingSpinner from './LoadingSpinner';

const MainContainer = () => {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({});
  const drinkButtonRefs = useRef({});
  const [isLegalModalOpen, setLegalModalOpen] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [loading, setLoading] = useState(false); 
  const [iframeToken, setIframeToken] = useState(null); // Store iframe token

  const openLegalDocuments = () => {
    setLegalModalOpen(true);
  };

  const closeLegalDocuments = () => {
    setLegalModalOpen(false);
  };

  const handleAgreementChange = (e) => {
    setIsAgreed(e.target.checked);
  };

  const updateItems = useCallback((name, price, quantity) => {
    setItems(prevItems => {
      const updatedItems = [...prevItems];
      const itemIndex = updatedItems.findIndex(item => item.name === name);

      if (itemIndex !== -1) {
        if (quantity === 0) {
          updatedItems.splice(itemIndex, 1);
        } else {
          updatedItems[itemIndex].quantity = quantity;
        }
      } else if (quantity > 0) {
        updatedItems.push({ name, price, quantity });
      }

      return updatedItems;
    });
  }, []);

  const deleteItem = useCallback((name) => {
    setItems(prevItems => prevItems.filter(item => item.name !== name));
    if (drinkButtonRefs.current[name]) {
      drinkButtonRefs.current[name].resetCounter();
    }
  }, []);

  const handleFormChange = useCallback((data) => {
    setFormData(prevState => ({ ...prevState, ...data }));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Submitting payment...');

    if (items.length === 0) {
      alert('Lütfen en az bir içecek seçiniz.');
      return;
    }

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

    const payload = {
      email: formData.email,
      phone_number: formData.phone_number,
      price: calculateTotal(),
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

  const calculateTotal = useCallback(() => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  }, [items]);

  if (loading) {
    return <LoadingSpinner />;
  }

  // If the iframe token is available, render the payment screen
  if (iframeToken) {
    return (
      <div className="payment-container">
        <h1>Ödeme Sayfası</h1>
        <script src="https://www.paytr.com/js/iframeResizer.min.js"></script>
        <iframe
          src={`https://www.paytr.com/odeme/guvenli/${iframeToken}`}
          id="paytriframe"
          frameBorder="0"
          scrolling="no"
          style={{ width: '100%', height: '600px' }}
        ></iframe>
        <script>
          iFrameResize({}, '#paytriframe');
        </script>
      </div>
    );
  }

  return (
    <div className="main-container">
      <div className="top-container">
        <div className="left-container">
          <DrinkButton
            ref={el => drinkButtonRefs.current["Askıda Çay"] = el}
            drinkName="Askıda Çay"
            drinkPrice={6.24}
            icon={teaIconOrange}
            updateItems={updateItems}
          />
          <DrinkButton
            ref={el => drinkButtonRefs.current["Askıda Kahve"] = el}
            drinkName="Askıda Kahve"
            drinkPrice={31.20}
            icon={coffeeIconOrange}
            updateItems={updateItems}
          />
          <DrinkButton
            ref={el => drinkButtonRefs.current["Askıda Soğuk Kahve"] = el}
            drinkName="Askıda Soğuk Kahve"
            drinkPrice={55.12}
            icon={icedCoffeeIconOrange}
            updateItems={updateItems}
          />
        </div>
        <div className="right-container">
          <OrderSummary
            items={items}
            deleteItem={deleteItem}
            handlePayment={handleSubmit} // Submit payment when the button is clicked
            totalPrice={calculateTotal()}
            isAgreed={isAgreed}
            handleAgreementChange={handleAgreementChange}
            openLegalDocuments={openLegalDocuments}
          />
        </div>
      </div>
      <div className="bottom-container">
        <Form onChange={handleFormChange} />
      </div>

      <LegalModal
        isOpen={isLegalModalOpen}
        closeModal={closeLegalDocuments}
        formData={formData}
        basketItems={items}
      />
    </div>
  );
};

export default MainContainer;
