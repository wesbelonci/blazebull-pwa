import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AuthenticationPage } from "../pages/Admin/Authentication";
import { AnimatePresence } from "framer-motion";
import { Admin } from "../pages/Admin/Home";
import { ProtectedAdminRoute } from "./ProtectedAdminRoute";
import { ListUsers } from "../pages/Admin/Users/ListUsers";
import { NewUsers } from "../pages/Admin/Users/NewUser";
import { EditUsers } from "../pages/Admin/Users/EditUser";
import { useAuth } from "../hooks/AuthContext";

const AdminRoutes: React.FC = () => {
  const location = useLocation();

  const { isAuthenticated } = useAuth();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {!isAuthenticated && <Route index element={<AuthenticationPage />} />}
        <Route element={<ProtectedAdminRoute />}>
          <Route index element={<Admin />} />
          <Route path="users">
            <Route index element={<ListUsers />} />
            <Route path="new" element={<NewUsers />} />
            <Route path="edit/:id" element={<EditUsers />} />
          </Route>
        </Route>
        <Route path="authentication" element={<AuthenticationPage />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </AnimatePresence>
  );
};

export { AdminRoutes };
