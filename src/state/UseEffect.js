import React, { useEffect } from "react";

function UseEffectCase() {
  useEffect(() => {
    console.log("The useEffect is effected");
  }, []);
  return <div>useEffect Example</div>;
}
export default UseEffectCase;
