import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/useAuth"; 

export const RouteShield = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <h1>Loading...</h1>;
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <Outlet />;
};
