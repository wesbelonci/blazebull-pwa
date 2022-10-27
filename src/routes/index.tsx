import React from "react";
import { AdminRoutes } from "./AdminRoutes";
import { AppRoutes } from "./AppRoutes";

const App: React.FC = () => {
  const plataform = process.env.REACT_APP_PLATAFORM_TYPE;

  return plataform === "admin" ? <AdminRoutes /> : <AppRoutes />;
};

export default App;
