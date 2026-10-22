import { useEffect } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    const isAuthenticated = localStorage.getItem('isAuthenticated') === "true";
    console.log('isAuthenticated ', isAuthenticated );

    // Option 1: Use <Navigate /> 
    // if (isAuthenticated) {
    //     return <Navigate to="/dashboard" replace/>
    // }

    // Option 2: Use useNavigate() with useEffect()
    useEffect(() => {
        console.log('Login useEffect');
        if (isAuthenticated) {
            navigate("/dashboard", { replace: true });
        }
    }, []);

    function handleLogin() {
        localStorage.setItem("isAuthenticated", "true");
        navigate("/dashboard", { replace: true });
    }

    return (
        <>
            <h1>Login Page</h1>
            <p>Click the button to simulate login.</p>
            <button onClick={handleLogin}>Login</button>
            <br /><br />
            <Link to="/">Go to Home</Link>&nbsp;&nbsp;
            <Link to="/about">Go to About</Link>
        </>
    );
}