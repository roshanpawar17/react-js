import Greeting from './components/01_Greeting/Greeting';
import DestructuringProps from './components/02_DestructuringProps/DestructuringProps';

import './App.css'

function App() {
  return (
    <>
      <h1>Props</h1>

      <Greeting name="Roshan" />
      <DestructuringProps name="Roshan" age={23} />
    </>
  )  
}

export default App
