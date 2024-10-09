import React from "react";
import burgers from './Burgers'
import CardList from "../card/CardList";

function BurgerList({onAddToBasket}){
  return <CardList cards={burgers} category='Бургеры' onAddToBasket={onAddToBasket}/>
}

export default BurgerList