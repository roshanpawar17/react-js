import Input from './components/Input/Input';
import Button from './components/Button/Button';

import './App.css'

function App() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <h1>Calculator App</h1>
      <main className="w-[20rem] h-[30rem] border-2 flex flex-col gap-8 p-4">
        <Input />
        <Button />
      </main>
    </div>
  )
}

export default App
