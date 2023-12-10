import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "payloadAmount":
      return { count: state.count + action.payload };
    case "reset":
      return { count: 0 };
    default:
      throw new Error();
  }
}

function UseReducerV1() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count: {state.count}</div>
      <button onClick={() => dispatch({ type: "increment" })}>PLUS</button>
      <button onClick={() => dispatch({ type: "decrement" })}>MINUS</button>
      <button onClick={() => dispatch({ type: "payloadAmount", payload: 10 })}>Add 10</button>
      <button onClick={() => dispatch({ type: "reset" })}>RESET</button>
    </div>
  );
}

export default UseReducerV1;
