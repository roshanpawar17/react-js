import { useNavigate } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem("isAuthenticated", "true");
        navigate("/dashboard", { replace: true });
    }

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>
                Login
            </button>
        </div>
    )
}