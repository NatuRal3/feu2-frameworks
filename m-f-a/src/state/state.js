import React from "react";
import { useState } from "react";
import ButtonComponent from "../buttons/onClick";

function useStateApp() {
  // Our counter state created here
  const [counter, setCounter] = useState(0);
  // This function calls 'setCounter' and
  // we increment 'counter' by 1
  function onButtonClickStatic() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={onButtonClickStatic}>Add 1</button>
    </div>
  );
}
export default useStateApp;
