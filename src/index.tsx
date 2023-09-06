import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'
import reportWebVitals from './reportWebVitals'
import { UsersList } from './pages/UsersList'
import { EditUser } from './pages/EditUser'
import { RegisterUser } from './pages/RegisterUser'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { light } from './styles/theme/light'

const router = createBrowserRouter([
  {
    path: '/users',
    element: <UsersList />,
  },
  {
    path: 'users/:cpf/edit',
    element: <EditUser />,
  },
  {
    path: '/users/new',
    element: <RegisterUser />,
  },
  {
    path: '/',
    element: <Navigate to="/users" replace />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={light}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
