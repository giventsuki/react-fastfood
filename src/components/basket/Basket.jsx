import React from "react";
import './Basket.css';

function Basket({ basketItems, updateItemCount }) {
  // Подсчет общей суммы товаров в корзине
  const totalPrice = basketItems.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <div className="basket">
      <h1 className="title">Корзина</h1>
      {basketItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        
        <div>
          <div className="basket-total">
            <h2>Общая сумма: {totalPrice}P</h2>
          </div>
          <div className="basket-pay">
            <button className="basket-pay-btn">Оплатить</button>
          </div>
          {basketItems.map((item, index) => (
            <div key={index} className="basket-item">
              <img src={item.src} alt={item.alt} className="basket-img" />
              <div className="basket-item-content">
                <p className="basket-title">{item.title}</p>
                <p className="basket-price">{item.price}P</p>
                <p className="basket-weight">{item.weight}г</p>
                {/* Сумма для каждого товара */}
                <p className="basket-item-total">
                  Сумма: {item.price * item.count}P
                </p>
              </div>
              <div className="basket-item-counter">
                <button 
                  className="basket-item-btn" 
                  onClick={() => updateItemCount(item.title, -1)}
                >
                  -
                </button>
                <p className="basket-count">{item.count}</p>
                <button 
                  className="basket-item-btn" 
                  onClick={() => updateItemCount(item.title, 1)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Basket;
