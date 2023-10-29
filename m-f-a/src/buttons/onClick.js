import React from "react";

function ButtonComponent() {
  function onButtonClick() {
    console.log("Button is clickyTyClickingGood");
  }

  return (
    <div>
      <button onClick={onButtonClick}>Click It</button>
    </div>
  );
}

export default ButtonComponent;
