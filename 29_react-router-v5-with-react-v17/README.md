#### Routing in React

> In React, routing means navigating between different pages or components without reloading the entire website.

> For example, in an e-commerce website:

- / → Home page
- /about → About page
- /products → Products page
- /contact → Contact page

In a React application, we commonly use React Router to implement routing.

-----

#### Key differences

Feature	              React Router v5	           React Router v6/v7

1. Route container	  -  Switch	                 -  Routes
2. Render component	  -  component={Home}	       -  element={<Home />}
3. Redirect	          -  Redirect	               -  Navigate
4. Navigation hook	  -  useHistory()	           -  useNavigate()
5. Route matching	    -  First matching route	   -  Best matching route
6. exact prop	        -  Often needed	           -  Not needed for ordinary routes

-----

#### How to install vite v4 + react v17 + react-dom v17 + react-router-dom v5 using node v16

-> Step 1: Create the Vite project

npm create vite@4 29_react-router-v5-with-react-v17 -- --template react

-> Step 2: Navigate into the project

cd 29_react-router-v5-with-react-v17

-> Step 3: Install React 17

npm install react@17 react-dom@17 react-router-dom@5

-> Step 3: Install correct version of Dev dependencies of TypeScript definitions

npm install -D @types/react@17 @types/react-dom@17

-> Step 4: Run the project

npm run dev

-----

#### React v17 

> Your src/main.jsx should use:

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);


-----

> Let's understand each one with simple examples.

1) Route with component={Login}

-> 

<Route
  exact
  path="/login"
  component={Login}
/>

2. How it works

- path="/login" — Matches the /login URL.
- component={Login} — Renders the Login component when the route matches.
- exact — Matches only the exact path /login, not longer paths such as /login/profile.

3. For example:

URL	                Result

1. /login	          - Shows Login
2. /login/profile	  - Does not match this exact route
3. /dashboard	      - Does not match

---

2) Default route with render and Redirect

-> 

{/* Default route */}
<Route
  exact
  path="/"
  render={() => <Redirect to="/dashboard" />}
/>

-> Purpose: Redirect the user from / to /dashboard.

-> How it works

1. Suppose the user visits: http://localhost:5173/
2. React Router matches path="/" and executes this function: () => <Redirect to="/dashboard" />
3. The <Redirect> component changes the current route to /dashboard.

---

3) ProtectedRoute.js

-> <ProtectedRoute exact path="/dashboard" component={Dashboard} />

-> Receive props

1. export const ProtectedRoute = ({ component: Component, ...rest }) => {}

2. The props are:

- component: Component — Takes the Dashboard component and assigns it to the variable Component.
- ...rest — Collects all remaining props, such as path and exact.
- Conceptually, the props look like this:

Component = Dashboard;

rest = {
  path: "/dashboard",
  exact: true
};

3. Where does props come from?

- React Router v5 provides props automatically to the render function when the route matches.
- You don't create or pass this props object yourself. React Router supplies it.
- For example, when you write:

<ProtectedRoute
  path="/dashboard"
  component={Dashboard}
/>

- React Router matches /dashboard and calls the render function with route props. 
- Conceptually, those props look like this:

{
  history: { /* navigation methods */ },
  location: { /* current URL information */ },
  match: { /* matched route information */ }
}

These are commonly called the route props.

-----

#### Can you call the component like a function?

render={(props) =>
  isAuthenticated ? (
    Component(props)
  ) : (
    <Redirect to="/login" />
  )
}

No, avoid this approach. React components should be rendered through JSX or React's element-creation APIs, not called directly as ordinary functions. Direct calls can cause problems with React's component lifecycle and Hooks.







