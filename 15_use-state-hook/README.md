### 13_use-state-hook:

> useState is a React Hook used to add and manage state (data that can change) inside a functional component.

> 1. Basic Syntax

->

import { useState } from "react";

const [state, setState] = useState(initialValue);

-> There are three important parts:

| Part           | Meaning                           |
| -------------- | --------------------------------- |
| `state`        | Current value                     |
| `setState`     | Function used to update the value |
| `initialValue` | Initial value of the state        |


-> If React relied only on normal local variables, their values would be recreated when the component function runs again. But the equally important issue is that React also needs to know when a value has changed so it can re-render the UI. useState solves both problems.

> 2. A functional component runs again on every render

-> A React functional component is just a JavaScript function:

function Counter() {
    let count = 0;

    // ...
}

-> When React renders it:

  Counter()
    ↓
  let count = 0

-> If something causes the component to render again:

  Counter()
    ↓
  let count = 0   ← created again

-> So if you had previously done:

  count++;

that value does not survive the next execution of the function.

-> Therefore, yes:

A normal local variable is re-initialized whenever the component function executes again.


> 3. But there's another problem: changing the variable doesn't trigger a render

-> Suppose:

  function Counter() {
      let count = 0;

      function increment() {
          count++;
      }

      return (
          <>
              <h2>{count}</h2>
              <button onClick={increment}>+</button>
          </>
      );
  }

-> When you click:

  count++;

-> the variable becomes:

  0 → 1

-> But React doesn't know that it changed.  

-> Therefore:

  count changes
      ↓
  React is not notified
      ↓
  No re-render
      ↓
  UI still shows 0


> 4. So there are actually two problems with normal local variables:

             Normal variable
                   │
        ┌──────────┴──────────┐
        ↓                     ↓
Doesn't notify React     Doesn't persist
when it changes          between renders
        │                     │
        ↓                     ↓
No re-render              Reinitialized
