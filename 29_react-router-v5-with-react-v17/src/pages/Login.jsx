
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const handleLogin = () => {
    // Demo only
    localStorage.setItem("isLoggedIn", "true");
    history.push("/dashboard");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
