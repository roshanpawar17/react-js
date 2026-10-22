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

