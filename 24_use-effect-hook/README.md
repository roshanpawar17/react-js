#### useEffect() Hook

> The useEffect() hook in React is used to synchronize a component with external systems such as APIs, browser events, timers, subscriptions, and other systems outside React.

> Let's understand it step by step with practical examples.

1) Why do we need useEffect()?

-> Imagine you have a React component that displays users from an API.
-> You want to:

1. Render the component.
2. Call the API to fetch users.
3. Store the response in state.
4. Display the users on the screen.

-> useEffect() helps you run the API request as a side effect of rendering, rather than directly during the render process.

-> Eg.

import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("Component rendered");
  }, []);

  return <h1>Users: {users.length}</h1>;
}

export default Users;

Here:

- useEffect() registers an effect.
- () => { ... } is the effect callback.
- [ ] is the dependency array.
- The empty array means the effect doesn't need to re-run because of changes to any reactive values inside it.

-----

2) The three ways to use useEffect()

A. Empty dependency array []

->

useEffect(() => {
  console.log("Effect executed");
}, []);

-> The effect runs after the component mounts, meaning after its initial render is committed.
-> Typical use cases:

- Fetch initial data.
- Set up a subscription.
- Register a browser event listener.


B. With dependencies [count]

-> 

useEffect(() => {
  console.log("Count changed:", count);
}, [count]);

-> The effect runs after the initial mount and again when count changes.
-> For example, if count changes from 0 to 1, the effect runs again.
-> Use this when an external system needs to stay synchronized with a changing value.


C. Without a dependency array

-> 

useEffect(() => {
  console.log("Effect executed");
});

-> The effect runs after every committed render.
-> Be careful: if the effect updates state on every render, it can cause an infinite render loop.

-----

3) What is the cleanup function?

-> Sometimes, an effect starts something that must be stopped when the component is removed or before the effect runs again.
-> Examples include:

- Event listeners
- Timers
- WebSocket connections
- Subscriptions

-> Eg. React lets you return a cleanup function from the effect.

import { useEffect } from "react";

function WindowWidth() {
  useEffect(() => {
    const handleResize = () => {
      console.log("Window resized");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <h1>Resize the browser window</h1>;
}

-> Why remove the event listener?

- When the component is removed, the listener should also be removed. Otherwise, it may continue doing unnecessary work or retain references to objects.
- The lifecycle is:

1. Effect runs → register the event listener.
2. User resizes the window → handler executes.
3. Component unmounts → cleanup removes the listener.

- For an effect with dependencies, React also runs the previous cleanup before setting up the effect again with new dependency values.

-----

4) Why can useEffect() cause an infinite loop?

-> Consider this code:

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, [count]);

  return <h1>{count}</h1>;
}

-> Here's what happens:

1. count starts at 0.
2. The effect sets it to 1.
3. React renders again.
4. The effect sees that count changed and sets it to 2.
5. The same cycle repeats.

-> This is an infinite update loop because the effect updates a state value that is also one of its dependencies.

-> Don't update state inside an effect without considering whether that update should trigger the effect again.

-----

5) Important: useEffect() and React component rendering

-> Remember that rendering and effects are different stages.

- Render: React executes your component function to determine what the UI should look like.
- Commit: React applies the required changes to the UI.
- Effect: React runs the effect after the relevant commit.

-> For example:

function Example() {
  console.log("Render");

  useEffect(() => {
    console.log("Effect");
  }, []);

  return <h1>Hello React</h1>;
}

- In a normal initial mount, you'll see output:

Render
Effect

-> In React Strict Mode during development, you may see additional renders and an extra effect setup/cleanup cycle. This helps detect bugs and is not necessarily what happens in production.

-> Also, useEffect() does not run during server rendering.

-----

6) When should you use useEffect()?

Requirement	                                            Use useEffect()?

1. Synchronize with an external API or system	        - Often yes
2. Register a browser event listener	                - Yes
3. Start a timer or subscription	                    - Yes
4. Update state directly in a button click handler	    - Usually no
5. Calculate a value from existing state or props	    - Usually no
6. Handle a form submission	                            - Usually no; use the submit handler
7. Fetch data in a Next.js Server Component	            - Usually no; fetch directly in the server component when appropriate

-----

> Each click updates count, which causes a re-render. Since count changed, the effect runs again.

Dependency array	    When the effect runs

1. []	               - After initial mount
2. [count]	           - After mount and when count changes
3. [count, userId]	   - After mount and when either dependency changes
4. Omitted	           - After every committed render


*Important: Include the reactive values used by your effect in its dependency array. Don't use the dependency array merely to force the effect to run a desired number of times.*

