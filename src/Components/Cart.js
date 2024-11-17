import React from "react";
import "./Cart.css";

function Cart({ cart, updateCartItem, removeFromCart }) {
  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <p>{item.name}</p>
            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={(e) => updateCartItem(item.id, parseInt(e.target.value))}
            />
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
