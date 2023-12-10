import React from "react";

import BasicComponent from "./components/BasicComp";
import BasicProp from "./components/BasicProps";
import ButtonComponent from "./buttons/onClick";
import UseStateApp from "./state/state";
import UseStateTF from "./state/useStateCase";
import Mapping from "./map/mapItems";
import Variable from "./conditionalRendering/Variable";
import TernaryOperator from "./conditionalRendering/ternaryOperator";
import ShortCircut from "./conditionalRendering/ShortCircut";
import "./styles.css";
import styles from "./App.module.css";
import "./styles.scss";
//import StyledComponent from "./components/StyledComp";
import logo from "./img/logo.png";
import UseEffectCase from "./state/UseEffect";
import UseEffectRenderEveryTime from "./state/UseEffectRunEveryTime";
import UseEffectRunWhenCompIsMounted from "./state/UseEffectRunWhenCompIsMounted";
import UseEffectCleanUpFunction from "./state/UseEffectCleanUpFunction";
import UseEffectCleanUpFunctionV2 from "./state/UseEffectCleanUpFunctionv2";
import UseReducerV1 from "./state/UseReducer";
import UseReducerShoppingCart from "./state/UseReducerShoppingCart";
import UseContextV1 from "./state/UseContextV1";
import UseContextV2 from "./state/UseContextV2";
import UseContextV3 from "./state/UseContextV3";
import ApiCalls from "./api/ApiCalls";
import HomeMadeHook from "./hooks/usePerson";
// import ApiCallsRouteParams from "./api/ApiCallsRouteParams";
// Gives Error
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
      <UseStateTF />
      <p className="text">Paragraph 1</p>
      <UseEffectCase />
      <UseEffectRenderEveryTime />
      <UseEffectRunWhenCompIsMounted />
      <UseEffectCleanUpFunction />
      <UseEffectCleanUpFunctionV2 />
      <UseReducerV1 />
      <UseReducerShoppingCart />
      <UseContextV1 />
      <UseContextV2 />
      <UseContextV3 />
      <ApiCalls />
      <HomeMadeHook />
      {/* <ApiCallsRouteParams /> */}
    </div>
  );
}

export default App;
