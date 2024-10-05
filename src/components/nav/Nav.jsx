import React from "react";
import './Nav.css';

function Nav({ src, alt, text }) {
  return (
    <button className="nav-button">
      <img src={src} alt={alt} className="nav-img" />
      <span className="nav-text">{text}</span>
    </button>
  );
}

export default Nav;
