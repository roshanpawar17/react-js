import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../redux/counter";

function Counter() {
  // Read state from Redux store
  const count = useSelector(state => state.counter.count);

  // Get dispatch function
  const dispatch = useDispatch();

  const { increment, decrement, reset, add5 } = counterActions;

  return (
    <div>
        <h1>Redux Toolkit + React: Counter App</h1>
        <p>Count: {count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(add5(5))}>Add +5</button>
    </div>
  )
}

export default Counter;