import React from "react";
import { Navigate, Outlet } from "react-router-dom";
// import { parseCookies } from "nookies";
import { useAuth } from "../hooks/AuthContext";

interface ProtectedRouteProps {
  children?: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/authentication" replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
