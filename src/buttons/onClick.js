import React from "react";

function ButtonComponent() {
  function onButtonClickStatic() {
    console.log("Button is clickyTyClickingGood");
  }

  function onButtonClickValue(value) {
    console.log(value || "No Value");
  }

  return (
    <div>
      <button onClick={onButtonClickStatic}>Click It</button>
      <button onClick={() => onButtonClickValue(42)}>TheNumber</button>
    </div>
  );
}

export default ButtonComponent;
