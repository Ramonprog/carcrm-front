import React from 'react'
import ReactDOM from 'react-dom/client'

import './style/global.css'
import MyRoutes from './routes/Routes.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.css'
import { store } from './store/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider store={store}>
        <MyRoutes />
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
