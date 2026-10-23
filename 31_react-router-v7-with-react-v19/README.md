#### In this approach:

- createBrowserRouter() defines your routes.
- RouterProvider connects the router to React.
- ProtectedRoute.jsx protects private pages using Outlet and Navigate.
- App.jsx renders <AppRouter />

----

**Note:** 

-> Calling navigate("/dashboard") directly during rendering is not recommended because it triggers navigation while React is rendering the component.

import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const isAuthenticated = localStorage.getItem('isAuthenticated') === "true";
  console.log('isAuthenticated ', isAuthenticated );

  if (isAuthenticated) {
    navigate("/dashboard");
  }
  
  return (
    <>
      <h1>Home Page</h1>
      <p>This is a public page.</p>
      <Link to="/about">Go to About</Link>
      <br /><br />
      <Link to="/login">Please Login</Link>
    </>
  );
}

-----

#### Which one should you use?

Scenario	                                                    Recommended approach

1. Redirect based on authentication during route rendering	  - <Navigate />
2. Navigate after a button click or form submission	          - useNavigate()
3. Navigate after an effect or asynchronous operation	        - useNavigate() inside useEffect()

-----

#### Which approach should you use?

Feature	                                useNavigate()	                              <Navigate />

1. Purpose	                            - Programmatic navigation	                  - Declarative redirection
2. Best use	                            - Button clicks, form submission, effects	  - Protected route checks
3. Can return as JSX?	                  - No	                                      - Yes
4. Recommended for your ProtectedRoute	- No	                                      - Yes


-----

#### Link element

-> In React, the Link component is provided by react-router-dom. It allows users to navigate between different routes (pages) in your React application without reloading the entire webpage.

1) Why do we use Link?

-> Suppose your application has three pages:

- Home — /
- About — /about
- Dashboard — /dashboard

-> You want users to navigate between these pages when they click a link.

1. Using a normal HTML <a> tag

<a href="/about">About</a>

- This generally causes the browser to perform a full-page navigation, requesting the page again.

2. Using React Router's <Link>

import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Home;

- Here, clicking About navigates to /about through React Router without a full-page reload.

-----

2) How does Link work with Route?

-> Link handles navigation, while Route determines which component should render for a matching URL.

-> 

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

-> How it works:

1. User clicks <Link to="/about">
            |
2. React Router updates the URL
      (localhost:5173/about)
            |
3. Matching <Route> renders About
      (No full-page reload)

------

3) Important props of Link

Prop	        Purpose	                                                            Example

1. to	        - Specifies the destination URL	                                    - to="/about"
2. replace	  - Replaces the current history entry instead of adding a new one	  - replace


-> Example using replace:

<Link to="/dashboard" replace>
  Go to Dashboard
</Link>

- Normally, navigation adds an entry to browser history. With replace, the current history entry is replaced, so pressing Back won't return to that particular previous entry.

------

4) Can we pass data using Link?

->

<Link
  to={{
    pathname: "/profile",
    state: {
      userId: 101,
      userName: "Roshan"
    }
  }}
>
  View Profile
</Link>

-> Receive the data in the destination component:

import { useLocation } from "react-router-dom";

function Profile() {
  const location = useLocation();

  const user = location.state;

  return (
    <div>
      <h1>Profile Page</h1>
      <p>User ID: {user?.userId}</p>
      <p>Name: {user?.userName}</p>
    </div>
  );
}

------

#### useNavigate() hook

-> In React, the useNavigate() hook is provided by react-router-dom (React Router v6 and later). It allows you to navigate from one route to another programmatically, without reloading the entire webpage.

-> For example, after a user logs in successfully, you can automatically redirect them to the dashboard.

1) Basic example of useNavigate()

import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function goToAbout() {
    navigate("/about");
  }

  return (
    <>
      <h1>Home Page</h1>

      <button onClick={goToAbout}>
        Go to About
      </button>
    </>
  );
}

-> How it works:

1. useNavigate() returns a navigation function.
2. We store that function in the navigate variable.
3. When the user clicks the button, navigate("/about") runs.
4. React Router navigates to /about and renders the matching route.

-----

2) Complete working example

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h2>Home Page</h2>

      <button onClick={() => navigate("/about")}>
        Go to About
      </button>

      <p>
        Or use a link: <Link to="/about">About</Link>
      </p>
    </>
  );
}

function About() {
  return <h2>About Page</h2>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

------

3) Useful features of useNavigate()

=> A. Navigate backward or forward

const navigate = useNavigate();

navigate(-1); // Go back one history entry
navigate(1);  // Go forward one history entry

=> B. Replace the current history entry

navigate("/dashboard", { replace: true });

- Normally, navigation adds a new history entry. With replace: true, it replaces the current entry instead.

- This can be useful after login when you don't want the Back button to return to the login page.

=> C. Pass state to another route

->

navigate("/profile", {
  state: {
    userId: 101,
    userName: "Roshan"
  }
});

-> Receive the state on the profile page:

import { useLocation } from "react-router-dom";

function Profile() {
  const location = useLocation();
  const user = location.state;

  return (
    <>
      <h2>Profile Page</h2>
      <p>User ID: {user?.userId}</p>
      <p>Name: {user?.userName}</p>
    </>
  );
}


------

4) useNavigate() vs Link

Feature	        useNavigate()	                                  Link

1. Type	        - Hook	                                        - Component
2. Navigation	  - Programmatically	                            - When clicked
3. Common use	  - After login, form submission, or an action	  - Navigation menus and page links
4. Example	    - navigate("/home")	                            - <Link to="/home">Home</Link>

------

5) Common mistake

-> Don't call navigate() directly during component rendering:

function Home() {
  const navigate = useNavigate();

  navigate("/dashboard"); // Avoid this during rendering

  return <h1>Home</h1>;
}

-> This can cause repeated navigation or rendering problems. Call it inside an event handler, or use an effect when navigation genuinely depends on a change in component state.



