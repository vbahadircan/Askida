import React, { useState } from 'react';

const CoffeeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
    <line x1="6" x2="6" y1="2" y2="4" />
    <line x1="10" x2="10" y1="2" y2="4" />
    <line x1="14" x2="14" y1="2" y2="4" />
  </svg>
);

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const AskidaKahveContainer = ({ donationAmount, handleDonationChange, isAgreed, handleAgreementChange, openLegalDocuments, handleSubmit }) => {
  const [amount, setAmount] = useState(donationAmount || 0);

  const increment = () => {
    setAmount(prevAmount => {
      const newAmount = Number(prevAmount) + 10;
      return newAmount;
    });
  
    // Update the parent state after the increment operation
    if (typeof handleDonationChange === 'function') {
      handleDonationChange({ target: { value: Number(amount) + 10 } });
    }
  };
  
  const decrement = () => {
    setAmount(prevAmount => {
      const newAmount = Math.max(0, Number(prevAmount) - 10);
      return newAmount;
    });
  
    // Update the parent state after the decrement operation
    if (typeof handleDonationChange === 'function') {
      handleDonationChange({ target: { value: Number(amount) - 10 } });
    }
  };

  const handleAmountChange = (e) => {
    let newAmount = e.target.value;
  
    // If the input is not empty, remove any leading zeros
    if (newAmount !== '') {
      newAmount = newAmount.replace(/^0+/, '');  // Remove leading zeros
    }
  
    // Handle case for empty input (set to zero if cleared)
    newAmount = newAmount === '' ? 0 : Number(newAmount);
  
    // Update local state and inform parent
    setAmount(newAmount);
    if (typeof handleDonationChange === 'function') {
      handleDonationChange({ target: { value: newAmount } });
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
      <div className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center justify-center bg-orange-100 text-orange-500 rounded-full p-3">
            <CoffeeIcon />
          </span>
          <h2 className="text-2xl font-bold text-gray-800">Askıda Kahve</h2>
        </div>
        <div className="mb-6">
          <p className="text-gray-600">
            Ne kadar TL değerinde kahve askıya bırakmak istersiniz?
          </p>
        </div>
        <div className="flex items-center justify-between gap-4 mb-8">
          <button
            onClick={decrement}
            className="h-14 w-14 rounded-full bg-orange-500 text-white hover:bg-orange-600 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition-colors duration-200"
            aria-label="Azalt"
          >
            <MinusIcon />
          </button>
          <div className="flex items-center">
            <input
              type="number"
              id="coffee-amount"
              value={amount || ''}
              onChange={handleAmountChange}
              className="text-center text-3xl font-semibold h-14 w-24 border-2 border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              min="0"
              aria-label="Bağış miktarı"
            />
            <span className="bg-gray-100 text-gray-800 text-2xl font-semibold h-14 px-3 flex items-center justify-center border-2 border-l-0 border-gray-300 rounded-r-lg">
              TL
            </span>
          </div>
          <button
            onClick={increment}
            className="h-14 w-14 rounded-full bg-orange-500 text-white hover:bg-orange-600 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition-colors duration-200"
            aria-label="Artır"
          >
            <PlusIcon />
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="terms"
              checked={isAgreed}
              onChange={handleAgreementChange}
              className="mt-1 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              <span
                onClick={openLegalDocuments}
                className="text-orange-500 hover:underline cursor-pointer"
              >
                Ön Bilgilendirme Formu
              </span>
              {' '}ve{' '}
              <span
                onClick={openLegalDocuments}
                className="text-orange-500 hover:underline cursor-pointer"
              >
                Mesafeli Satış sözleşmesini
              </span>
              {' '}kabul ediyorum.
            </label>
          </div>
          <button
            className="w-full bg-orange-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!isAgreed} onClick={handleSubmit}
          >
            Ödemeye Geç
          </button>
        </div>
      </div>
    </div>
  );
};

export default AskidaKahveContainer;