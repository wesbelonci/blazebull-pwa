import { Routes, Route, useLocation } from "react-router-dom";
import { AuthenticationPage } from "../pages/Authentication";
import { HomePage } from "../pages/Home";
import { InitialAccessPage } from "../pages/InitialAccess";
import ProtectedRoute from "./ProtectedRoute";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route index element={<InitialAccessPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="home" element={<HomePage />} />
        </Route>
        <Route path="authentication" element={<AuthenticationPage />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
