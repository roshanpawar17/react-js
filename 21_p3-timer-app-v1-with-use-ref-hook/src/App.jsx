
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [seconds, setSeconds] = useState(0);
  const [isTimerStart, setIsTimerStart] = useState(false);

  const renderCount = useRef(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    setIsTimerStart(true);
  }

  const stopTimer = () => {
    clearInterval(timerRef.current);
    setIsTimerStart(false);
  }

  useEffect(() => {
    renderCount.current += 1;
    console.log('Render Count: ', renderCount.current);
  }, [seconds, isTimerStart]);


  return (
    <>
      <h1>Timer App</h1>
      <h3>{seconds}</h3>
      <div>
        <button onClick={startTimer} disabled={isTimerStart}>Start Timer</button>
        <button onClick={stopTimer} disabled={!isTimerStart}>Stop Timer</button>
      </div>
    </>
  )
}

export default App
