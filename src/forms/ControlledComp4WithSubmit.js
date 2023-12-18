import React, { useState } from "react";

function ControlledComp4WSub() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");

  function onFormSubmit(event) {
    event.preventDefault();

    const body = {
      firstName,
      lastName,
      city,
    };
    fetch("http://www.exmpl.com", {
      method: "POST",
      body: JSON.stringify(body),
    });
  }

  function onTextInputChange(event) {
    const value = event.target.value;

    if (event.target.name === "first-name") {
      setFirstName(value);
    }
    if (event.target.name === "mid-name") {
      setLastName(value);
    }
    if (event.target.name === "city") {
      setCity(value);
    }
  }

  //   function onFirstNameChange(event) {
  //     setFirstName(event.target.value);
  //   }
  //   function onLastNameChange(event) {
  //     setLastName(event.target.value);
  //   }

  //   function onCityChange(event) {
  //     setCity(event.target.value);
  //   }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="first-name">First Name</label>
        <input
          name="first-name"
          value={firstName}
          placeholder="First Name"
          onChange={onTextInputChange}
        />

        <label htmlFor="mid-name">Middle Name</label>
        <input
          name="mid-name"
          value={lastName}
          placeholder="Middle Name"
          onChange={onTextInputChange}
        />

        <label htmlFor="city">City</label>
        <input name="city" value={city} placeholder="City" onChange={onTextInputChange} />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default ControlledComp4WSub;
