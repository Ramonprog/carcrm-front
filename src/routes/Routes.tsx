import React, { Suspense, lazy } from 'react';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from '../style/theme';
import { useAppSelector } from '../store/store';

// Lazy load the Auth component
const Auth = lazy(() => import('../View/auth').then(module => ({ default: module.Auth })));
const Register = lazy(() => import('../View/register').then(module => ({ default: module.Register })));

const MyRoutes = () => {
  const { token } = useAppSelector(state => state.auth)
  const ProtectedRoutes = ({ redirectTo }: { redirectTo: string }) => {
    const isAuthenticated = token !== '' && token !== null;
    return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
  };

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoutes redirectTo="/" />}>
            <Route path="/vehicles" element={<div>main</div>} />
          </Route>
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};

export default MyRoutes;
