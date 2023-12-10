import React, { createContext } from "react";

const ThemeContext = createContext();

function UseContextV1() {
  return (
    <ThemeContext.Provider value="dark">
      <div>
        <MyComponent />
      </div>
    </ThemeContext.Provider>
  );
}

function MyComponent() {
  return (
    <ThemeContext.Consumer>
      {(value) => <div>UseContextV1 display mode is {value}</div>}
    </ThemeContext.Consumer>
  );
}

export default UseContextV1;
