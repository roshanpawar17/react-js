import WithLocalVarible from './components/01_with-local-variable/WithLocalVariable';
import WithUseState from './components/02_with-usestate/WithUseState';

import './App.css';

function App() {
  return (
    <div className="flex flex-col gap-4 items-start p-4">
      <h1>State Management</h1>
      <WithLocalVarible />
      <WithUseState />
    </div>
  )
}

export default App
