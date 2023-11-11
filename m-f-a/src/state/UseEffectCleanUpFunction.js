import React, { useEffect, useState } from "react";

function UseEffectCleanUpFunctionInt() {
  useEffect(() => {
    setInterval(() => {
      console.log("Timer is running");
    }, 1000);
  }, []);
  return <div>Show example</div>;
}

function UseEffectCleanUpFunction() {
  const [showComp, setShowComp] = useState(true);

  function onButtonClickSetComp() {
    setShowComp(false);
  }
  return (
    <div>
      {showComp ? <UseEffectCleanUpFunctionInt /> : null}
      <button onClick={onButtonClickSetComp}>Hide Comp</button>
    </div>
  );
}

export default UseEffectCleanUpFunction;
