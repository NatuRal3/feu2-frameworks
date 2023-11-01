import React from "react";
import products from "./Items";

function TernaryOperator() {
  let isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? (
        <>
          <p>ternary is true</p>
          <ul>
            {products.map((products) => (
              <li key={products.id}>{products.title}</li>
            ))}
          </ul>
        </>
      ) : (
        <div>
          <p>ternary is false</p>
        </div>
      )}
    </div>
  );
}

export default TernaryOperator;
