import React, { useState } from "react";

function ControlledComp3() {
  const [surName, setSurName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [city, setCity] = useState("");

  function onSurNameChange(event) {
    setSurName(event);
  }
}
