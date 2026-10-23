import { Link, useLocation } from "react-router-dom";

export default function Profile() {

  const location = useLocation();
  console.log('location ', location);

  return (
    <>
      <h1>Profile Page</h1>
      <p>This is a protected page.</p>
      <p>Name: {location?.state?.userName}</p>
      <Link to="/dashboard">Go to Dashboard</Link>
    </>
  );
}