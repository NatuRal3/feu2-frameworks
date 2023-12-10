import React from "react";
import { useState } from "react";

function UseStateTF() {
  const [isActive, setIsActive] = useState(false);

  function onButtonClickIsActive() {
    setIsActive(!isActive);
  }
  return (
    <div>
      <div>State: {isActive ? "true" : "false"}</div>
      <button onClick={onButtonClickIsActive}>True/False</button>
    </div>
  );
}
export default UseStateTF;
