import { useCallback, useState } from "react";
import Child from "./Child";

export default function WithUseCallback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Child button clicked');
  }, []);

  console.log("Parent rendered");

  return (
    <div>
      <h3>2. With UseCallback: Child not rendered except initial render</h3>
      <p>Count: {count}</p>

      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>

      <Child onClick={handleClick} />
    </div>
  )
}
