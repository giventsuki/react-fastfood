import React from 'react'
import './Header.css'
import mainBurger from '../../images/main/main-burger.png'
import logo from '../../images/main/white-logo.png'

function Header() {
  return(
    <header className="header">
      <img src={logo} alt="logo" className="header-img" />    
      <div className="header-content">
        <img src={mainBurger} alt="mainBurger" className="header-content-img" />
        <div className="header-content-text">
          <h1 className="header-content-title">
            <span className='white'>Только самые <br/></span>
            <span className='orange'>сочные бургеры</span>
          </h1>
          <p className="header-content-paragraph">
            Бесплатная доставка от 599₽
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header;