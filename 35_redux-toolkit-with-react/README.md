#### Redux Toolkit in React

1) What is Redux Toolkit?

> Redux Toolkit (RTK) is the official, recommended way to write Redux logic. It makes managing shared state in React applications easier and reduces the amount of code required compared with traditional Redux.

1. Imagine you have a React application with multiple components:

- Navbar displays the user's cart count.
- ProductList adds products to the cart.
- Cart displays the total number of products.

2. Instead of passing state and functions through multiple components using props, you can store the shared state in a Redux Store.

-----

2) Important Redux Toolkit concepts

Concept	                Meaning

1. Store	            - Holds the application's Redux state.
2. Slice	            - Groups a piece of state with the reducers that update it.
3. Reducer	            - Defines how state changes in response to an action.
4. Action	            - Describes what happened, such as incrementing a counter.
5. configureStore()	    - Creates and configures the Redux store.
6. createSlice()	    - Creates a slice, including its reducers and action creators.
7. useSelector()	    - Reads data from the Redux store in a React component.
8. useDispatch()	    - Dispatches actions to update the Redux store.
9. Provider	            - Makes the Redux store available to React components.

-----

1. Step 1: Install the packages

npm install @reduxjs/toolkit react-redux

- @reduxjs/toolkit provides Redux Toolkit functionality.
- react-redux connects Redux with React components.



