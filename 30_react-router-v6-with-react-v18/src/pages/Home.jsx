import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is a public page.</p>
      <Link to="/about">Go to About</Link> <br /><br />
      <Link to="/login">Please Login into Application</Link>
    </div>
  );
}