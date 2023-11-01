import React from "react";
import BasicComponent from "./components/BasicComp";
import BasicProp from "./components/BasicProps";
import ButtonComponent from "./buttons/onClick";
import UseStateApp from "./state/state";
import Mapping from "./map/mapItems";
import Variable from "./conditionalRendering/Variable";
import TernaryOperator from "./conditionalRendering/ternaryOperator";

function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <BasicComponent />
      <BasicProp title="BasicTitle" price={15.99} />
      <ButtonComponent />
      <UseStateApp />
      <Mapping />
      <Variable />
      <TernaryOperator />
    </div>
  );
}

export default App;
