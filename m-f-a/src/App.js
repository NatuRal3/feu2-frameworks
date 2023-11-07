import React from "react";
import BasicComponent from "./components/BasicComp";
import BasicProp from "./components/BasicProps";
import ButtonComponent from "./buttons/onClick";
import UseStateApp from "./state/state";
import Mapping from "./map/mapItems";
import Variable from "./conditionalRendering/Variable";
import TernaryOperator from "./conditionalRendering/ternaryOperator";
import ShortCircut from "./conditionalRendering/ShortCircut";
import "./styles.css";
import styles from "./App.module.css";
import "./styles.scss";
//import StyledComponent from "./components/StyledComp";
import logo from "./img/logo.png";

function App() {
  return (
    <div className={styles.container}>
      <img src={logo} />
      <h1>Hello world</h1>
      <BasicComponent />
      <BasicProp title="BasicTitle" price={15.99} />
      <ButtonComponent />
      <UseStateApp />
      <Mapping />
      <Variable />
      <TernaryOperator />
      <ShortCircut />

      <p className="text">Paragraph 1</p>
    </div>
  );
}

export default App;
