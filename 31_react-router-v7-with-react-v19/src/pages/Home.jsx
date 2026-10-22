import { useEffect } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const isAuthenticated = localStorage.getItem('isAuthenticated') === "true";
  console.log('isAuthenticated ', isAuthenticated);

  // Option 1: Use <Navigate /> 
  // if (isAuthenticated) {
  //   return <Navigate to="/dashboard" replace />
  // }

  // Option 2: Use useNavigate() with useEffect()
  useEffect(() => {
    console.log('Home useEffect');
    if (isAuthenticated) {
      navigate("/dashboard", { replace: true });
    }
  }, []);

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
