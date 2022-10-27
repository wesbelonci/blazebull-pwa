import React from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";

interface ProtectedRouteProps {
  children?: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const { lang } = useParams();

  if (!isAuthenticated) {
    return <Navigate to={`/${lang}/authentication`} replace />;
  }

  return children ? children : <Outlet />;
};

export { ProtectedRoute };
