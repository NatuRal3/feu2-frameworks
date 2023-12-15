import React, { useState } from "react";

function ControlledForm() {
  const [firstName, setFirstName] = useState("");

  return (
    <div>
      <form>
        <input value={firstName} placeholder="First Name" />
      </form>
    </div>
  );
}

export default ControlledForm;
