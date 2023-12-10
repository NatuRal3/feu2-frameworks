import React, { useEffect, useState } from "react";

function UseEffectRenderEveryTime() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("useEffectRenderEveryTime has run");
  });
  function onIncCounter() {
    setCounter(counter + 1);
  }
  function onDecCounter() {
    setCounter(counter - 1);
  }
  console.log("Comp has rendered");

  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={onIncCounter}>+</button>
      <button onClick={onDecCounter}>-</button>
    </div>
  );
}

export default UseEffectRenderEveryTime;
