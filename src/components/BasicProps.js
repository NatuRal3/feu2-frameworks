import React from "react";

function BasicProp(props) {
  return (
    <p>
      {props.title}: {props.price}
    </p>
  );
}
export default BasicProp;
