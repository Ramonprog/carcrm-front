import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "../style/theme";
import { lazy } from "react";

const App = lazy(() => import("../App"));

const MyRoutes = () => {
  const ProtectedRoutes = ({ redirectTo }: { redirectTo: string }) => {
    const isAuthenticated = false;
    return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
  };

  return (
    <ThemeProvider theme={theme}>
      <Routes>

        <Route path="/" element={<App />} />
        <Route path="/login" element={<div>teste</div>} />


        <Route element={<ProtectedRoutes redirectTo="/" />}>
          <Route path="/main" element={<div>main</div>} />
        </Route>

      </Routes>
    </ThemeProvider>

  );
};

export default MyRoutes;