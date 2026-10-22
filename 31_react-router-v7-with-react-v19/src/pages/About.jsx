import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const isAuthenticated = localStorage.getItem('isAuthenticated') === "true";
  console.log('isAuthenticated ', isAuthenticated);

  // Option 1: Use <Navigate /> 
  // if (isAuthenticated) {
  //   return <Navigate to="/dashboard" replace />
  // }

  // Option 2: Use useNavigate() with useEffect()
  useEffect(() => {
    console.log('About useEffect');
    if (isAuthenticated) {
      navigate("/dashboard", { replace: true });
    }
  }, []);

  return (
    <>
      <h1>About Page</h1>
      <p>Anyone can access this page.</p>
      <Link to="/">Go Home</Link>
      <br /><br />
      <Link to="/login">Please Login</Link>
    </>
  );
}