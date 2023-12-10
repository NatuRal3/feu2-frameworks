import React, { useState, useEffect } from "react";

function usePerson() {
  const [firstName, setFirstName] = useState("");

  function greetPerson() {
    console.log(`Hello ${firstName}`);
  }
  return { setFirstName, greetPerson };
}

function HomeMadeHook() {
  const { greetPerson, setFirstName } = usePerson();

  useEffect(() => {
    setFirstName("Ola");
    greetPerson();
  }, [setFirstName, greetPerson]);
  return <div>Home Made Hook Example</div>;
}

export default HomeMadeHook;
