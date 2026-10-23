import { useNavigate, Link, useLocation } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();
    const location = useLocation();
    console.log('Location ', location);

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        navigate('/login', { replace: true });
    }

    return (
        <>
            <h1>Dashboard</h1>
            <p>You are logged in!</p>
            <p>Name: {location?.state?.userName}</p>
            <Link to={{
                pathname: "/profile"
            }} state={{
                userId: 1,
                userName: "Roshan"
            }}>View Profile</Link>
            <br />
            <br />
            <button onClick={handleLogout}>Logout</button>
        </>
    );
}
