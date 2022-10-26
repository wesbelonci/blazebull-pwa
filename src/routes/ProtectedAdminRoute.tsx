import React from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";

interface ProtectedRouteProps {
  children?: JSX.Element;
}

const ProtectedAdminRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, user } = useAuth();
  const { lang } = useParams();

  if (isAuthenticated && user && user.role !== "admin") {
    return <Navigate to={`/${lang}/home`} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedAdminRoute;
