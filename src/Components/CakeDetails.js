import React from "react";
import { useParams } from "react-router-dom";

function CakeDetails() {
  const { id } = useParams();
  const cakeImages = {
    "birthday-cakes": "/cakes/birthday-cake.jpg",
    "wedding-cakes": "/cakes/wedding-cake.jpg",
    "cupcakes": "/cakes/cupcakes.jpg",
    "custom-cakes": "/cakes/custom-cake.jpg",
  };

  return (
    <div className="container">
      <h2>{id.replace("-", " ").toUpperCase()} Details</h2>
      <img src={cakeImages[id]} alt={id.replace("-", " ")} style={{ width: "100%", maxWidth: "500px" }} />
      <p>Delicious cakes made to perfection. Explore the range!</p>
    </div>
  );
}

export default CakeDetails;
