import React from "react";
import products from "./Items";

function ShortCircut() {
  let isLoggedIn = true;
  return (
    <div>
      {isLoggedIn && (
        <>
          <p>ShortCircut: If loged in and item is on sale </p>
          <ul>
            {products.map(
              (products) => products.isOnSale && <li key={products.id}>{products.title}</li>
            )}
          </ul>
        </>
      )}
    </div>
  );
}

export default ShortCircut;
