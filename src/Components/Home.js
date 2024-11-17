import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home">
      <h1>Welcome to CakeFactory</h1>
      <p>Where every cake is a masterpiece!</p>
      <img src="/cake1.jpg" alt="Featured Cake" className="featured-image" />
    </div>
  );
}

export default HomePage;
