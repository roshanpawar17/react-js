#### React useReducer() Hook

> The useReducer() hook in React is used to manage state when the state logic becomes complex or when multiple actions need to update the same state.
> Think of it as an alternative to useState(), but with a more structured way to handle state updates.


#### Why do we use useReducer()?

> Suppose you are building a counter application. Using useState():

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;

- This works perfectly because the state logic is simple.

> But imagine a more complex application with many actions, such as: or If multiple action updte same state and logic i s complex. (Imp 1)

- Increment the counter.
- Decrement the counter.
- Reset the counter.
- Increment by a specific amount.
- Apply different business rules depending on the action.

> Instead of writing the state update logic in multiple places, we can centralize it using useReducer(). (Imp 2)


#### How does useReducer() work?

>

            User Action
    Click Increment, Decrement, or Reset
                |
                |
            dispatch(action)
    Sends an action to the reducer
                |
                |
            reducer(state, action)
    Decides how the state should change  
                |
                |
            New State
    React re-renders the component with the updated state          

> There are three important concepts:

Concept	            Meaning

1. state	    - The current state value
2. action	    - Describes what you want to do
3. dispatch()	- Sends an action to the reducer    


#### Basic syntax

> const [state, dispatch] = useReducer(reducer, initialState); (Imp 3)

> Let's understand each part: (Imp 4)

- state: The current state.
- dispatch: A function used to send an action to reducer.
- reducer: A function that calculates the next state.
- initialState: The starting state.

> A reducer function generally looks like this:

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    case "RESET":
      return 0;

    default:
      return state;
  }
}

*Important: A reducer should be a pure function. It should calculate and return the next state without directly modifying the existing state.*

