import React from "react";
import './Card.css'


function Card({src, alt, price, title, weight, onAddToBasket}){
  return(
    <div className="card">
      <img src={src} alt={alt} className="card-img" />
      <p className="card-price">{price}P</p>
      <p className="card-title">{title}</p>
      <p className="card-weight">{weight}г</p>
      <button className="card-button"
      onClick={onAddToBasket}>Добавить</button>
    </div>
  )
}

export default Card