import React, { useReducer } from "react";

const products = [
  {
    id: 0,
    title: "Milk",
    price: 26.0,
    discountedPrice: 17.99,
  },
  {
    id: 1,
    title: "Bread",
    price: 29.3,
    discountedPrice: 19.99,
  },
  {
    id: 2,
    title: "Ham",
    price: 19.99,
    discountedPrice: 10.99,
  },
];

export const initialStateShoppingCart = { cart: [], total: 0 };

export function reducer(state, action) {
  let productIndex;
  let newTotal;
  let cart;

  switch (action.type) {
    case "addProductToCart":
      cart = [...state.cart];

      productIndex = cart.findIndex((product) => product.id === action.payload.id);
      if (productIndex === -1) {
        cart.push({ ...action.payload, quantity: 1 });
      } else {
        cart = [
          ...cart.slice(0, productIndex),
          { ...cart[productIndex], quantity: cart[productIndex].quantity + 1 },

          ...cart.slice(productIndex + 1),
        ];
      }
      newTotal = cart.reduce((currentTotal, product) => {
        currentTotal += product.discountedPrice * product.quantity;
        return currentTotal;
      }, 0);
      return { ...state, cart: cart, total: newTotal };

    case "removeProduct":
      cart = [...state.cart];
      productIndex = cart.findIndex((product) => product.id === action.payload.id);
      if (productIndex !== -1) {
        if (cart[productIndex].quantity > 1) {
          cart = [
            ...cart.slice(0, productIndex),
            {
              ...cart[productIndex],
              quantity: cart[productIndex].quantity - 1,
            },
            ...cart.slice(productIndex + 1),
          ];
        } else {
          cart = [...cart.slice(0, productIndex), ...cart.slice(productIndex + 1)];
        }
      }

      newTotal = cart.reduce((currentTotal, product) => {
        currentTotal += product.discountedPrice * product.quantity;
        return currentTotal;
      }, 0);
      return { ...state, cart: cart, total: newTotal };

    case "clearCart":
      return { cart: [], total: 0 };
    default:
      return state;
  }
}

function UseReducerShoppingCart() {
  const [state, dispatch] = useReducer(reducer, initialStateShoppingCart);
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <button onClick={() => dispatch({ type: "addProductToCart", payload: product })}>
            Add {product.title}
          </button>
          <button onClick={() => dispatch({ type: "removeProduct", payload: product })}>
            Remove {product.title}
          </button>
        </div>
      ))}
      <div>
        <hr />
        <button onClick={() => dispatch({ type: "clearCart" })}>Clear cart</button>
      </div>
      <div>{state.total}</div>
      <hr />
      <div>
        {state.cart.map((product) => (
          <div key={product.id}>
            {product.quantity} - {product.title} - {product.discountedPrice}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UseReducerShoppingCart;
