import React from "react";
import CardList from "../card/CardList";
import hotdogs from "./Hotdogs";

function HotdogList({onAddToBasket}){
  return <CardList cards={hotdogs} category='Хот-доги' onAddToBasket={onAddToBasket}/>
}

export default HotdogList