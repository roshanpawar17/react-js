
import { useHistory } from "react-router-dom";

function Users() {
  const history = useHistory();

  return (
    <div>
      <h1>Users</h1>
      <p>Welcome to Users Page.</p>

      <button onClick={() => history.push("/dashboard")}>
        Go to Dashboard
      </button>
    </div>
  );
}

export default Users;
