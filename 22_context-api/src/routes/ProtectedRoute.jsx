import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

function ProtectedRoute() {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}

export default ProtectedRoute