import React, { useState } from "react";

function ControlledComp3() {
  const [surName, setSurName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [city, setCity] = useState("");

  function onSurNameChange(event) {
    setSurName(event.target.value);
  }

  function onMiddleNameChange(event) {
    setMiddleName(event.target.value);
  }

  function onSetCityChange(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form>
        <input value={surName} placeholder="Sur Name" onChange={onSurNameChange} />
        <input value={middleName} placeholder="Middle Name" onChange={onMiddleNameChange} />
        <input value={city} placeholder="From City" onChange={onSetCityChange} />
      </form>
    </div>
  );
}

export default ControlledComp3;
