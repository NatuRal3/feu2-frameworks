import React from "react";

function ButtonComponent() {
  function onButtonClick(value) {
    console.log("Button is clickyTyClickingGood");
    console.log(value);
  }

  return (
    <div>
      <button onClick={onButtonClick}>Click It</button>
      <button onClick={() => onButtonClick(42)}>TheNumber</button>
    </div>
  );
}

export default ButtonComponent;
