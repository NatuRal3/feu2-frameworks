import React from "react";
import BasicComponent from "./components/BasicComp";
import BasicProp from "./components/BasicProps";

function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <BasicComponent />
      <BasicProp title="BasicTitle" price={15.99} />
    </div>
  );
}

export default App;
