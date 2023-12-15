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

/**If you try and change the input then you will notice that nothing happens.
 * This is because our input is a Controlled component/input.
 * We instead need to use the state setter (setFirstName).
 */
