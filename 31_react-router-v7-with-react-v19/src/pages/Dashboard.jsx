import { useNavigate, Link } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        navigate('/login', { replace: true });
    }

    return (
        <>
        <h1>Dashboard</h1>
        <p>You are logged in!</p>
        <Link to="/profile">View Profile</Link>
        <br />
        <br />
        <button onClick={handleLogout}>Logout</button>
        </>
    );
}
