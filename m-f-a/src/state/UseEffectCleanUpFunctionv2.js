import React, { useEffect, useState } from "react";

function UseEffectCleanUpFunctionV2() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("useEffect has run V2");
  }, [counter]);

  function onIncrementCounterV2() {
    setCounter(counter + 1);
  }

  function onDecrementCounterv2() {
    setCounter(counter - 1);
  }

  console.log("Comp has rendered");

  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={onIncrementCounterV2}>+</button>
      <button onClick={onDecrementCounterv2}>-</button>
    </div>
  );
}

export default UseEffectCleanUpFunctionV2;
