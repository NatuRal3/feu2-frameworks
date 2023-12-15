import React, { useState } from "react";

function ControlledForm2() {
  const [lastName, setLastName] = useState("");

  function onFirstNameChange(event) {
    setLastName(event.target.value);
    console.log("Value added to last name");
  }
  return (
    <div>
      <form>
        <input value={lastName} placeholder="Last Name" onChange={onFirstNameChange} />
      </form>
    </div>
  );
}

export default ControlledForm2;

/**
 * Our input will now be changed based on the user’s input
 * and we can use the firstName sate value whenever we need
 * this data, such as submitting it to an API.
 */
