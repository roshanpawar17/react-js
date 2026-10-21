import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>You are logged in!</p>
      <Link to="/profile">View Profile</Link>
    </div>
  );
}