import { useState } from "react"
import Child from "./Child";

export default function WithoutUseCallback() {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log('Child button clicked');
  }

  console.log("Parent rendered");

  return (
    <div>
      <h3>1. Without UseCallback: Rendered Child also</h3>
      <p>Count: {count}</p>

      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>

      <Child onClick={handleClick} />
    </div>
  )
}
