
import './App.css'
import { AuthProvider } from './providers/AuthProvider'
import { AppRouter } from './routes'

function App() {
  return (
    <>
      <AuthProvider>
        <h1>Context API</h1>
        <AppRouter />
      </AuthProvider>
    </>
  )
}

export default App
