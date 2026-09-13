import LogicalOperator from './components/01_LogicalOperator/LogicalOperator';
import { TernaryOperator } from './components/02_TernaryOperator/TernaryOperator';
import IfElseStatement from './components/03_IfElseStatement/IfElseStatement';

import './App.css'

function App() {
  return (
    <>
      <h1>Conditional Rendering</h1>

      <LogicalOperator />
      <TernaryOperator />
      <IfElseStatement />
    </>
  )
}

export default App
