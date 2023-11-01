import React from "react";
import products from "./Items";

function ShortCircut() {
  let isLoggedIn = true;
  return (
    <div>
      {isLoggedIn && (
        <>
          <p>ShortCircut is true. Will not display any if false</p>
          <ul>
            {products.map((products) => (
              <li key={products.id}>{products.title}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default ShortCircut;
