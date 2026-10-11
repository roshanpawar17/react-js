import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// 1. Create a Context
const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {}
});

// 2. Create a Provider
export function AuthProvider({ children }) {
    const storedUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

    const [user, setUser] = useState(storedUser);

    const login = (newUser) => {
        console.log('Login Sucessful');
        localStorage.setItem('user', JSON.stringify(newUser));
        setUser(newUser);
    }

    const logout = () => {
        console.log('Logout Sucessful');
        localStorage.removeItem('user');
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            { children }
        </AuthContext.Provider>
    )
}

// 3. Consume a Context in application
export const useAuth = () => useContext(AuthContext);