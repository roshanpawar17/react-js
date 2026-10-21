
import { useHistory } from "react-router-dom";

function Dashboard() {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    history.push("/login");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome! You are logged in.</p>

      <button onClick={() => history.push("/users")}>
        Go to Users Page
      </button>
      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
