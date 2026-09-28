import { useState } from "react";

function WithUseState() {

  const [count, setCount] = useState(0);
  console.log('Comonent Rerender Current Count (WithUseState) ', count);

  const increamentCount = () => {
    setCount(prevCount => prevCount + 1);
    console.log("Function Increament Previous Count (WithUseState) ", count);
  }

  return (
    <div className="flex flex-col gap-4 items-start p-4">
      <h2>2. With useState</h2>
      <p>Count: {count}</p>
      <button className="bg-blue-400 p-2 text-white" onClick={increamentCount}>Increament</button>
    </div>
  )
}

export default WithUseState;
