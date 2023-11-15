import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function UseContextV3() {
  const [theme, setTheme] = useState("dark");
  function toggleTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>
        <MyComponent />
      </div>
    </ThemeContext.Provider>
  );
}

function MyComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <div>V3 Display Mode: {theme}</div>
      <button onClick={toggleTheme}>Change theme</button>
    </div>
  );
}

export default UseContextV3;
