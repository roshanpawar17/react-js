#### Redux with React — Explained with Examples

> Redux is a state management library used with React to manage and share data between components in a predictable way.

1) What is Redux?

1. Imagine you have a React application with these components:

- Navbar — displays the logged-in user's name.
- Profile — displays the user's information.
- Dashboard — displays user details.
- Settings — updates user preferences.

All these components may need access to the same user information.

2. Without Redux, you might pass data through props from parent to child components. This is called prop drilling.

=> Without Redux

    App
     |
Pass data through props
     |
Parent Component
     |
Child Component

- As the application grows, passing props through many levels can become difficult to maintain.

4. With Redux, shared state is stored in a central place called the Redux Store.

=> With Redux

    Redux Store
(Shared application state)
        |
Navbar        Profile
Dashboard     Settings        

- Components can access the shared state without passing it through every intermediate component.

-----

2) Important Redux concepts

Concept	        Meaning

1. Store	    - Holds the application's shared state.
2. State	    - The current data stored in Redux.
3. Action	    - Describes what you want to do, such as increment a counter.
4. Reducer	    - A function that calculates the next state from the current state and an action.
5. Dispatch	    - Sends an action to Redux.
6. Selector	    - Reads specific data from the store.
7. Provider	    - Makes the Redux store available to React components.

-----

3) A simple way to remember the Redux flow:

    React Component
(User clicks Increment)
        |
    Dispatch an Action
      (increment())
        |
    Reducer
(Updates the counter state)
        |
    Store Updated
  (Counter: 0 → 1)
        |
    React UI Re-renders
(Displays the new counter value)

------

4) Counter Example Using Redux with React

1. We'll use these packages:

- redux — creates the store and manages state.
- react-redux — connects the Redux store to React components.

2. Install the packages

npm install redux react-redux

3. Project structure

- src/
    - redux/
        - actions.js
        - reducer.js
        - store.js
- App.jsx
- main.jsx

4. Create action types and action creators

Create src/redux/actions.js.

- Explanation

An action is a JavaScript object that describes what should happen.

- For example:

{
  type: "INCREMENT"
}

- The increment() function is an action creator. It creates and returns that action object.

5. Create the reducer

Create src/redux/reducer.js.

- What is a reducer?

A reducer is a function that receives the current state and an action, then returns the next state.

function counterReducer(state, action) {
  // Return updated state
}

- For example, when the current count is 2 and the action type is INCREMENT, the reducer returns:

{
  count: 3
}

- Notice that we return a new state object instead of modifying the existing state directly. This is an important Redux rule.

6. Create the Redux store

Create src/redux/store.js.

- The store holds the application's state and provides methods such as getState() and dispatch().
- The Provider makes the Redux store accessible to React components inside it.

7. Create the Counter component

Create src/App.jsx.

- What do useSelector() and useDispatch() do?

i. useSelector()

-> const count = useSelector((state) => state.count);
-> useSelector() reads the count from the Redux store and subscribes the component to changes in that selected value.

ii. useDispatch()

-> const dispatch = useDispatch();
-> useDispatch() provides the function used to dispatch Redux actions.
-> dispatch(increment());
-> This dispatches the increment action, which the reducer handles to update the state.

-----

5) Classic Redux methods to remember

    Method	                Purpose

1. createStore()	        - Creates the Redux store.
2. reducer()	            - Calculates the next state.
3. dispatch()	            - Sends an action to the store.
4. getState()	            - Reads the current state.
5. Provider	                - Connects the store to React.
6. useSelector()	        - Reads state in a React component.
7. useDispatch()	        - Dispatches actions from a React component.

