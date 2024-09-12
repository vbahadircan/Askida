import React from "react";
import "./OrderSummary.css";

const OrderSummary = ({ items, deleteItem }) => {
  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };

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
              <td>{item.quantity * item.price} ₺</td>
              <td>
                <button className="delete-btn" onClick={() => deleteItem(item.name)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-price">Toplam = {calculateTotal()} ₺</div>
      <button className="payment-button">Ödemeye Geç</button>
    </div>
  );
};

export default OrderSummary;