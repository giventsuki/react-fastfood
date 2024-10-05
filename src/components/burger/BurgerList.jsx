import React from "react";
import burgers from './Burgers'
import CardList from "../card/CardList";

function BurgerList(){
  return (
    <>
      <CardList cards={burgers} />
    </>
    )
}

export default BurgerList