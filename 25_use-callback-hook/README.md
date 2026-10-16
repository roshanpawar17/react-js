### What is useCallback() ?

> useCallback() is a React Hook used to remember (cache) a function between re-renders.

> The simplest way to understand it: useCallback prevents React from creating a new function object reference on every render when its dependencies haven't changed.

> The important is that useCallback is specifically designed for caching function references.

> This is the key distinction:

- useCallback does not prevent a component from re-rendering.
- useCallback only keeps the same function reference between parent renders.

1. The problem without useCallback

-> 

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <>
      <button onClick={handleClick}>Click</button>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </>
  );
}

-> Every time count changes, App re-renders.

-> During every render, this:

const handleClick = () => {
  console.log("Clicked");
};

creates a new function object.

-> Conceptually:

Render 1:
handleClick → Function A

Render 2:
handleClick → Function B

Render 3:
handleClick → Function C

-> Even though the function's code is exactly the same, its reference is different.


-----

2. Using useCallback

-> 

import { useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <>
      <button onClick={handleClick}>Click</button>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </>
  );
}

-> Now React remembers the function:

First render:
handleClick → Function A

Second render:
handleClick → Function A

Third render:
handleClick → Function A

-> As long as the dependencies haven't changed.

-----

3. Why does this matter?

-> You might wonder:
"If the function does the same thing, why do I care if React creates another function?"

-> Usually, you don't need to care.

-> useCallback() becomes useful when the function is being passed to a component that is optimized with React.memo.

1) For example:

- child:

const Child = React.memo(function Child({ onClick }) {
  console.log("Child rendered");

  return <button onClick={onClick}>Child Button</button>;
});

- Parent:

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <>
      <Child onClick={handleClick} />

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </>
  );
}

- You might expect Child not to render when count changes because of React.memo.

- But:

handleClick

is a new function on every render.

- So React sees:

Previous:
onClick → Function A

Current:
onClick → Function B

- Therefore:

Function A !== Function B

and Child renders again.

-----

4. useCallback + React.memo

->

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <>
      <Child onClick={handleClick} />

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </>
  );
}

-> Now

Render 1:
handleClick → Function A

Render 2:
handleClick → Function A

Render 3:
handleClick → Function A

-> So React.memo can see that:

previous onClick === current onClick

and skip the child render.

-----

5. What does [] mean?

-> Consider:

const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);

-> The empty dependency array means:
"The function doesn't depend on any changing values from this component."

So React can reuse the same function.

-----

6. What if the function uses state?

-> Example:

function App() {
  const [count, setCount] = useState(0);

  const showCount = useCallback(() => {
    console.log(count);
  }, [count]);

  // ...
}

-> Here the function uses:

count

-> Therefore:

[count]

must be included as a dependency.

-> Now:

count = 0
↓
showCount → Function A

count = 1
↓
showCount → Function B

count = 2
↓
showCount → Function C

Because the dependency changed.

-----

8. Very important: useCallback does NOT stop a function from executing

-> This is a common misunderstanding.

const handleClick = useCallback(() => {
  console.log("Hello");
}, []);

-> useCallback does not mean:

"Run this function only once."

-> It means:

"Keep the same function reference between renders."

-> If you click 10 times:

Click
 ↓
handleClick()

Click
 ↓
handleClick()

Click
 ↓
handleClick()

The function executes every time.