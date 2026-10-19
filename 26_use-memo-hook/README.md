#### What is useMemo() Hook

> The useMemo() hook in React is used to remember the result of a calculation between re-renders so React doesn't need to recalculate it unnecessarily.

> In simple words, imagine you have a calculation that takes 2 seconds. If the component re-renders but the calculation's inputs haven't changed, useMemo() lets React reuse the previous result.

> Interview-ready answer

useMemo() is a React hook that memoizes the result of a calculation between renders. It accepts a callback and a dependency array. React recalculates the value when a dependency changes; otherwise, it can reuse the cached value. It is primarily used to optimize expensive calculations and avoid unnecessary work, not as a mechanism for storing application state.

1) Syntax

-> 

import { useMemo } from "react";

const cachedValue = useMemo(() => {
  return calculateSomething();
}, [dependencies]);

-> There are two important parts:

- Callback function: Contains the calculation you want to perform.
- Dependency array: React recalculates the result when a dependency changes.

-----

2) Understand with a practical example

Suppose you have a counter and a function that calculates the sum of numbers.

=> WITHOUT useMemo()

import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const result = calculateSum();

  function calculateSum() {
    console.log("Calculating...");
    let total = 0;

    for (let i = 0; i < 1000000; i++) {
      total += i;
    }

    return total;
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <h3>Sum: {result}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

- Problem: Every time you click Increment, the component re-renders and calculateSum() runs again—even though the calculation doesn't depend on count.

=> WITH Use useMemo()

import { useMemo, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    console.log("Calculating...");

    let total = 0;

    for (let i = 0; i < 1000000; i++) {
      total += i;
    }

    return total;
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <h3>Sum: {result}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

- What happens now?

1. The component renders for the first time.
2. useMemo() executes the calculation and remembers the result.
3. You click Increment, and the component re-renders.
4. Because the dependency array is empty ([]), React can reuse the cached result instead of recalculating it.

-----

3) How does the dependency array work?

There are three common patterns.

Code	                                Behavior

1. useMemo(() => calculate(), [])	    - Reuses the cached result while the component remains mounted.
2. useMemo(() => calculate(), [count])	- Recalculates when count changes.
3. useMemo(() => calculate())	        - Recalculates on every render; no useful memoization.

-----

4) useMemo() vs useCallback()

These two hooks are related, but they remember different things.

useMemo()	                                    useCallback()

1. Remembers a value returned by a function.	- Remembers a function reference.
2. Useful for expensive calculations.	        - Useful when a stable callback reference matters.
3. useMemo(() => count * 2, [count])	        - useCallback(() => setCount(c => c + 1), [])
