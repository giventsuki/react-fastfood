import { useState } from 'react';
import './App.css';
import BurgerList from './components/burger/BurgerList';
import Header from './components/header/Header'
import HotdogList from './components/hotdog/HotdogList';
import NavList from './components/nav/NavList';
import SnackList from './components/snack/SnackList';
import Basket from './components/basket/Basket';

function App() {  

  const [basketItems, setBasketItems] = useState([])

  const addToBasket = (item) => {
    setBasketItems((prevItems) => {
      const existingItem = prevItems.find(basketItem => basketItem.title === item.title)
      if(existingItem){
        return prevItems.map(basketItem => 
          basketItem.title === item.title ? 
          {...basketItem , count: basketItem.count + 1} : basketItem
        );
      }
      else {
        return [...prevItems, {...item, count: 1}]
      }
    })
  }

  const updateItemCount =  (itemTitle, countChange) => {
    setBasketItems((prevItems) => {
      return prevItems.map(basketItem => {
        if (basketItem.title === itemTitle){
          const updatedCount = basketItem.count + countChange
          return updatedCount > 0 ? { ...basketItem, count: updatedCount}
          : null 
        }
        return basketItem
      }).filter(basketItem => basketItem !== null)
    })
  }

  return (
    <div className="App">
      <Header />
      <NavList />
      <div className="app-container">
        <Basket basketItems={basketItems} updateItemCount={updateItemCount} />
        <BurgerList onAddToBasket={addToBasket} />
    </div>
    </div>
  );
}

export default App;
