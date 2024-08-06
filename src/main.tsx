import React from 'react'
import ReactDOM from 'react-dom/client'

import './style/global.css'
import MyRoutes from './routes/Routes.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.css'
import { store } from './store/store.ts'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ReduxProvider store={store}>
          <MyRoutes />
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </ReduxProvider>
      </QueryClientProvider>

    </BrowserRouter>
  </React.StrictMode>,
)
