import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { parseCookies } from "nookies";

interface ProtectedRouteProps {
  children?: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [authenticated, setAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const { "blazebull.token": token } = parseCookies();
    if (token) {
      setAuthenticated(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!authenticated) {
    return <Navigate to="/authentication" replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
