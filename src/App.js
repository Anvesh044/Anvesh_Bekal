import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Components/Home";
import CakeCategories from "./Components/Categories";
import CakeDetails from "./Components/CakeDetails";
import Cart from "./Components/Cart";
import AboutUs from "./Components/About";
import Contact from "./Components/Contact";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (cake) => {
    const existingItem = cart.find((item) => item.id === cake.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === cake.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...cake, quantity: 1 }]);
    }
  };

  const updateCartItem = (id, quantity) => {
    setCart(
      cart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CakeCategories addToCart={addToCart} />} />
        <Route path="/details/:id" element={<CakeDetails addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} updateCartItem={updateCartItem} removeFromCart={removeFromCart} />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
