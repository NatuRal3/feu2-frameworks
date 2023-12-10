import React from "react";

const products = [
  { id: 0, title: "Bread" },
  { id: 1, title: "Water" },
  { id: 2, title: "Honey" },
  { id: 3, title: "Garlic" },
];

function Mapping() {
  return (
    <div>
      <ul>
        {products.map((products) => (
          <li key={products.id}>{products.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Mapping;
