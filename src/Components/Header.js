import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src="/logo.png" alt="CakeFactory Logo" className="logo"  />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/categories">Cakes</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
