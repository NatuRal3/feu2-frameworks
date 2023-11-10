import React, { useEffect, useState } from "react";

function UseEffectRunWhenCompIsMounted() {
  const [cat, setCat] = useState(0);
  const noEffect = 1;

  //UseEffect will only run when cat is updated
  //Use noEffect Variable to test and see the console log only run once.

  useEffect(() => {
    console.log("useEffect has run");
  }, [cat]);
  function onIncrementCounterIsMounted() {
    setCat(cat + 1);
  }
  function onDecrementCounterIsMounted() {
    setCat(cat - 1);
  }
  console.log("Comp has rendered");

  return (
    <div>
      <div>Counter: {cat}</div>
      <button onClick={onIncrementCounterIsMounted}>+</button>
      <button onClick={onDecrementCounterIsMounted}>-</button>
    </div>
  );
}

export default UseEffectRunWhenCompIsMounted;
