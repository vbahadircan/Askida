import React from "react";
import "./OrderSummary.css";

const OrderSummary = React.memo(({ items, totalPrice, handlePayment, deleteItem, isAgreed, handleAgreementChange, openLegalDocuments }) => {
  return (
    <div className="order-summary">
      <table>
        <thead>
          <tr>
            <th>Ürün</th>
            <th>Miktar</th>
            <th>Fiyat</th>
            <th>Ara Toplam</th>
            <th>Sil</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price} ₺</td>
              <td>{(item.quantity * item.price).toFixed(2)} ₺</td>
              <td>
                <button className="delete-btn" onClick={() => deleteItem(item.name)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-price">Toplam: {(totalPrice).toFixed(2)} ₺</div>
      <button className="payment-button" onClick={handlePayment}>
        Ödemeye Geç
      </button>
      <div className="agreement-section">
        <input
          type="checkbox"
          id="legalAgreement"
          checked={isAgreed}
          onChange={handleAgreementChange}
        />
        <label htmlFor="legalAgreement">
          <span className="highlighted" onClick={openLegalDocuments}> Ön bilgilendirme Formu</span> ve
          <span className="highlighted" onClick={openLegalDocuments}> Mesafeli Satış sözleşmesini</span> kabul ediyorum.        </label>
      </div>
    </div>
  );
});

export default OrderSummary;
