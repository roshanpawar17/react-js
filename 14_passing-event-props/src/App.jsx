import BasicExample from './components/BasicExample/BasicExample';
import PassingArguments from './components/PassingArguments/PassingArguments';

import './App.css'

function App() {


  const handleClick = (event) => {
    console.log('Event ', event);
    alert("Button Clicked");
  }


  const handleClick2 = (event, name) => {
    console.log("Event ", event);
    alert(`Hello, ${name}`);
  }


  return (
    <div className="p-4 flex flex-col gap-4">
      <h1>Passing Event As Props</h1>
      <BasicExample handleClick={handleClick} />
      <PassingArguments handleClick={handleClick2} />
    </div>
  )
}

export default App
