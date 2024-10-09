import React from "react";
import Nav from "./Nav"; // Импортируем компонент Nav
import navs from './Navs'; // Импортируем массив navs

function NavList() {
  return (
    <ul className="nav-list">
      {navs.map((item, index) => (
        <li className="nav-item" key={index}>
          <Nav src={item.src} alt={item.alt} text={item.text} />
        </li>
      ))}
    </ul>
  );
}

export default NavList;