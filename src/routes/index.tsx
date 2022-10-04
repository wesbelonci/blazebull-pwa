import { Routes, Route, useLocation } from "react-router-dom";
import { AuthenticationPage } from "../pages/Authentication";
import { HomePage } from "../pages/Home";
import { InitialAccessPage } from "../pages/InitialAccess";
import ProtectedRoute from "./ProtectedRoute";
import { AnimatePresence } from "framer-motion";
import { RoomCrash } from "../pages/RoomCrash";
import { RoomDouble } from "../pages/RoomDouble";
import { Classroom } from "../pages/Classroom";
import { Settings } from "../pages/Settings";
import { useAuth } from "../hooks/AuthContext";

const App = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {isAuthenticated && <Route index element={<HomePage />} />}
        {!isAuthenticated && <Route index element={<InitialAccessPage />} />}
        <Route element={<ProtectedRoute />}>
          <Route path="home" element={<HomePage />} />
          <Route path="room-crash" element={<RoomCrash />} />
          <Route path="room-double" element={<RoomDouble />} />
          <Route path="classroom" element={<Classroom />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="authentication" element={<AuthenticationPage />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
