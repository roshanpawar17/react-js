#### Custom Hook in React

> A Custom Hook in React is a JavaScript function that lets you reuse stateful logic between multiple components.

> For example, if multiple components need to fetch API data, manage a counter, or handle form inputs, you can create a custom hook and reuse that logic instead of writing it repeatedly.

> The function name starts with use. This naming convention tells React and its lint rules that the function is a hook.

1) Why do we need a Custom Hook?

Suppose you have two components that both need a counter.

=> Without a custom hook, you might write the same logic in both components:

1. 

import { useState } from "react";

function CounterOne() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

function CounterTwo() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

2. Both components have duplicated counter logic.

3. Solution: Move the reusable logic into a custom hook.

-----

2) Create your first Custom Hook

=> Let's create a reusable counter hook.

1. 

import { useState } from "react";

export default function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  return {
    count,
    increment,
    decrement
  };
}

Let's understand it step by step.

- useCounter() — our custom hook function.
- useState(0) — maintains the counter's state.
- increment() — increases the count.
- decrement() — decreases the count.
- return — exposes the state and functions to the component.

-----

3. Use the Custom Hook in a Component

Now import and use the hook in your component.

import useCounter from "./useCounter";

export default function Counter() {
  const {
    count,
    increment,
    decrement
  } = useCounter();

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={increment}>
        Increment
      </button>

      <button onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

-----

4. Where are Custom Hooks useful?

Custom Hook	            Purpose

1. useCounter()	        - Reusable counter logic
2. useFetch()	        - Fetch API data and manage loading/error states
3. useLocalStorage()	- Synchronize state with local storage
4. useDebounce()	    - Delay updates until input activity pauses
5. useForm()	        - Reusable form state and validation
6. useWindowSize() 	    - Track browser window dimensions
