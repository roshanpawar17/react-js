
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Users() {
  const history = useHistory();

  return (
    <div>
      <h1>Users</h1>
      <p>Welcome to Users Page.</p>

      <Link to="/dashboard">
        Go to Dashboard
      </Link>
    </div>
  );
}

export default Users;
