import BasicExample from "./components/01_BasicExample/BasicExample";
import JsEvaluate from "./components/02_JsEvaluate/JsEvaluate";
import FunctionCalls from "./components/03_FunctionCalls/FunctionCalls";
import ConditionalRendering from "./components/04_ConditionalRendering/ConditionalRendering";
import JsObject from "./components/05_JsObject/JsObject";

import "./App.css";

function App() {
  return (
    <div className="jse-container">
      <h1>JavaScript Expression</h1>

      <BasicExample />

      <JsEvaluate />

      <FunctionCalls />

      <ConditionalRendering />

      <JsObject />
    </div>
  )
}

export default App
