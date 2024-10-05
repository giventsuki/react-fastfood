import React from "react";
import Card from "./Card";
import './Card.css'

function CardList({cards}){
  return(
    <div className="cards-wrapper">
      {cards.map((card, index) => (
        <Card key={index}  src={card.src} alt={card.alt} price={card.price}
        title={card.title} weight={card.weight} />
      ))}
    </div>
  )
}

export default CardList
