import React from 'react'
import ReactDOM from 'react-dom/client'

import './style/global.css'
import MyRoutes from './routes/Routes.tsx'
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
