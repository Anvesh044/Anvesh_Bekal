import React from "react";
import "./CakeCategories.css";

const cakes = [
  { id: 1, name: "Chocolate Cake", price: 15, image: "/cake2.jpg" },
  { id: 2, name: "Vanilla Cake", price: 12, image: "/cake3.jpg" },
  { id: 3, name: "Red Velvet Cake", price: 20, image: "/cake4.jpg" },
  { id: 4, name: "Blueberry Cake",price:25,image:"/cake5.jpg"},
];

function CakeCategories({ addToCart }) {
  return (
    <div className="categories">
      <h2>Our Cakes</h2>
      <div className="cake-list">
        {cakes.map((cake) => (
          <div className="cake-item" key={cake.id}>
            <img src={cake.image} alt={cake.name} />
            <h3>{cake.name}</h3>
            <p>${cake.price}</p>
            <button onClick={() => addToCart(cake)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CakeCategories;
