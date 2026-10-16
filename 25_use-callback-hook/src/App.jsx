
import './App.css'
import WithoutUseCallback from './components/01_WithoutUseCallback/WithoutUseCallback'
import WithUseCallback from './components/02_WithUseCallback/WithUseCallback'

function App() {

  return (
    <>
      <h1>Use Callback Hook</h1>
      <WithoutUseCallback />
      <WithUseCallback />
    </>
  )
}

export default App
