import BasicExample from './components/BasicExample/BasicExample';
import PassingArguments from './components/PassingArguments/PassingArguments';

import './App.css'

function App() {
    return (
        <div className="p-4 flex flex-col gap-4">
            <h1>Event Handling</h1>
            <BasicExample />
            <PassingArguments />
        </div>
    )
}

export default App
