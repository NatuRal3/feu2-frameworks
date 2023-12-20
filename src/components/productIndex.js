import React from "react";
import ProductCard from "./ProductCard";

function App() {
  function addToCart(productIndex) {
    console.log("Adding to cart, index:", productIndex);
  }
  return (
    <ProductCard
      index="0"
      title="Milk"
      description="Fresh milk that was locally sourced."
      price={9.99}
      onAddToCartClick={addToCart}
    />
  );
}

export default App;
