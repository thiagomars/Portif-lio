import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import './index.css'
import Certificados from './pages/Certificados'
import Contato from './pages/Contato'
import ErrorPage from './pages/ErrorPage'
import Habilidades from './pages/Habilidades'
import Home from './pages/Home'
import LayoutDashboard from './pages/LayoutDashboard'
import Projetos from './pages/Projetos'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutDashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/Habilidades",
        element: <Habilidades />
      },
      {
        path: "/Projetos",
        element: <Projetos />
      },
      {
        path: "/Contato",
        element: <Contato />
      },
      {
        path: "/Certificados",
        element: <Certificados />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
