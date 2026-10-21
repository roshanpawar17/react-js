import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoute = () => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') ? Boolean(localStorage.getItem('isAuthenticated')) : null;

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }

    return <Outlet />
}