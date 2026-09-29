#### What is useRef hook ?

> useRef is a React Hook that lets you store a value between renders without causing a re-render when that value changes.

> Two common uses are:

1. Accessing a DOM element

-> For example, focusing an input:

import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus input</button>
    </>
  );
}

-> Here:

    const inputRef = useRef(null);

-> creates an object roughly like:

    {
        current: null
    }

-> After React renders the <input>, React puts the actual DOM element into:

    inputRef.current

-> So you can do things like:

    inputRef.current.focus();
    inputRef.current.scrollIntoView();


----

2. Storing a value without causing re-renders

-> For example:

import { useRef, useState } from "react";

function Counter() {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  function updateRef() {
    countRef.current += 1;
    console.log(countRef.current);
  }

  function updateState() {
    setCount(count + 1);
  }

  return (
    <>
      <p>State: {count}</p>
      <button onClick={updateRef}>Update ref</button>
      <button onClick={updateState}>Update state</button>
    </>
  );
}

----

> The important difference is:

| `useState`                         | `useRef`                                               |
| ---------------------------------- | ------------------------------------------------------ |
| Stores a value                     | Stores a value                                         |
| Persists between renders           | Persists between renders                               |
| Updating it **causes a re-render** | Updating `.current` **doesn't cause a re-render**      |
| Good for values displayed in UI    | Good for DOM references, timers, previous values, etc. |
