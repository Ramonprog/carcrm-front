import React, { Suspense, lazy } from 'react';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from '../style/theme';

// Lazy load the Auth component
const Auth = lazy(() => import('../View/auth').then(module => ({ default: module.Auth })));

const MyRoutes = () => {
  const ProtectedRoutes = ({ redirectTo }: { redirectTo: string }) => {
    const isAuthenticated = false;
    return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
  };

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/login" element={<div>teste</div>} />
          <Route element={<ProtectedRoutes redirectTo="/" />}>
            <Route path="/main" element={<div>main</div>} />
          </Route>
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};

export default MyRoutes;
