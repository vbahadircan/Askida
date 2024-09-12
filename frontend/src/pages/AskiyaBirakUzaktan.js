// src/pages/AskidaBirakUzaktan.js
import React, { useState } from 'react';

function AskidaBirakUzaktan() {
  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handlePayment = async (e) => {
    e.preventDefault();
    const paymentData = {
      name,
      email,
      amount,
    };

    try {
      const response = await fetch('/api/payment/iyzico/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      if (response.ok) {
        const result = await response.json();
        // Handle successful payment initiation, e.g., redirect to payment gateway
        window.location.href = result.paymentUrl;
      } else {
        // Handle errors
        console.error('Payment failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Askıya Bırak - Uzaktan Kahve Bağışı</h2>
      <form onSubmit={handlePayment}>
        <div>
          <label>
            İsim:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            E-posta:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Bağış Miktarı (TL):
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Bağış Yap</button>
      </form>
    </div>
  );
}

export default AskidaBirakUzaktan;
