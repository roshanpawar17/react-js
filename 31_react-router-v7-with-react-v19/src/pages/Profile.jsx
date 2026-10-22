import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <>
      <h1>Profile Page</h1>
      <p>This is a protected page.</p>
      <Link to="/dashboard">Go to Dashboard</Link>
    </>
  );
}