import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../redux/actions";

function Counter() {
  // Read state from Redux store
  const count = useSelector(state => state.count);

  // Get dispatch function
  const dispatch = useDispatch();

  return (
    <div>
        <h1>Counter</h1>
        <p>Count: {count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter;