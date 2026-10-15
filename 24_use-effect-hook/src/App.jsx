
import './App.css';
import ApiRequest from './components/01_ApiRequest';
import CleanupFunction from './components/02_CleanupFunction';
import InfiniteLoop from './components/03_InfiniteLoop';

function App() {
  return (
    <>
      <h1>Use Effect Hook</h1>
      <ApiRequest />
      <CleanupFunction />
      <InfiniteLoop />
    </>
  )
}

export default App
