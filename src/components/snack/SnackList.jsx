import React from "react";
import snacks from "./Snacks";
import CardList from "../card/CardList";

function SnackList({onAddToBasket}) {
  return <CardList cards={snacks} category='Закуски' onAddToBasket={onAddToBasket}/>
}

export default SnackList