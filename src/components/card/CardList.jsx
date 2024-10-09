import React from "react";
import Card from "./Card";
import './Card.css'

function CardList({cards, category, onAddToBasket}){
  return(
    <div className="cards-wrapper">
    <h1 className="category">{category}</h1>
    <div className="grid">
      {cards.map((card, index) => (
        <Card key={index}  src={card.src} alt={card.alt} price={card.price}
        title={card.title} weight={card.weight}  onAddToBasket={() => onAddToBasket(card)}
        />
      ))}
    </div>
  </div>
  )}

export default CardList
