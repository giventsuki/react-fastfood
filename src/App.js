import './App.css';
import BurgerList from './components/burger/BurgerList';
import Header from './components/header/Header';
import NavList from './components/nav/NavList';

function App() {  
  return (
    <div className="App">
      <Header />
      <NavList />
      <BurgerList />
    </div>
  );
}

export default App;
