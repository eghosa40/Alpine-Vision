import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "src/context/AuthContext";

export default function ProtectedRoute() {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
}

