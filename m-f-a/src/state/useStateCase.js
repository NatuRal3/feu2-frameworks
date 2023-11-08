import React from "react";
import { useState } from "react";

function useStateTF() {
  // Our counter state created here
  const [isActive, setIsActive] = useState(true);
  // This function calls 'setCounter' and
  // we increment 'counter' by 1
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
export default useStateTF;
