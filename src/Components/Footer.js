import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <p>Quick Links</p>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/categories">Cakes</a></li>
          <li><a href="/cart">Cart</a></li>
          <li><a href="/about">About Us</a></li>
        </ul>
      </div>
      <div className="contact-info">
        <p>Contact Us</p>
        <p>123 Bakery Lane, Sweet City</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: contact@cakefactory.com</p>
      </div>
    </footer>
  );
}

export default Footer;
