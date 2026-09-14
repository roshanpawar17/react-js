import WithoutModuleCssHeader from './components/01_WithoutModuleCssHeader/WithoutModuleCssHeader';
import Header from './components/02_WithModuleCssHeader/Header';
import MultipleClasses from './components/03_MultipleClasses/MultipleClasses';
import ConditionalClasses from './components/04_ConditionalClasses/ConditionalClasses';

import './App.css'

function App() {
  return (
    <div className="app">
      <h1 className="heading">Module CSS</h1>

      <WithoutModuleCssHeader />
      <Header />
      <MultipleClasses />
      <ConditionalClasses />
    </div>
  )
}

export default App
