import React, { createContext, useContext } from "react";

const ThemeContext = createContext();

function UseContextV2() {
  return (
    <ThemeContext.Provider value="C.R.E.A.M">
      <div>
        <MyComponent />
      </div>
    </ThemeContext.Provider>
  );
  function MyComponent() {
    const value = useContext(ThemeContext);
    return <div>UseContextV2 display mode is {value}</div>;
  }
}

export default UseContextV2;
