import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AuthenticationPage } from "../pages/App/Authentication";
import { HomePage } from "../pages/App/Home";
import { InitialAccessPage } from "../pages/App/InitialAccess";
import { ProtectedRoute } from "./ProtectedRoute";
import { AnimatePresence } from "framer-motion";
import { RoomCrash } from "../pages/App/RoomCrash";
import { RoomDouble } from "../pages/App/RoomDouble";
import { Classroom } from "../pages/App/Classroom";
import { Settings } from "../pages/App/Settings";
import { useAuth } from "../hooks/AuthContext";
import { getLocale, suportedLanguages } from "../language";
import { BankManagerPage } from "../pages/App/BankManager";
import { ChangePassword } from "../pages/App/ChangePassword";
import { ForgotPassword } from "../pages/App/ForgotPassword";
import { NeedHelp } from "../pages/App/NeedHelp";
import { Support } from "../pages/App/Support";

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  const language = getLocale();
  const param = location.pathname.split("/");

  const checkSuportedLanguage = suportedLanguages.find(
    (language) => language === param[1]
  );

  if (location.pathname === "/" || !checkSuportedLanguage) {
    return <Navigate to={`${language}`} />;
  }

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path=":lang">
          {!isAuthenticated && (
            <>
              <Route index element={<InitialAccessPage />} />
              <Route path="authentication" element={<AuthenticationPage />} />
              <Route path="change-password" element={<ChangePassword />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
            </>
          )}
          <Route path="need-help" element={<NeedHelp />} />
          <Route element={<ProtectedRoute />}>
            <Route index element={<HomePage />} />
            <Route path="room-crash" element={<RoomCrash />} />
            <Route path="room-double" element={<RoomDouble />} />
            <Route path="classroom" element={<Classroom />} />
            <Route path="bank-manager" element={<BankManagerPage />} />
            <Route path="settings" element={<Settings />} />
            <Route path="support" element={<Support />} />
          </Route>
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export { AppRoutes };
