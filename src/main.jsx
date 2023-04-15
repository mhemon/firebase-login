import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Register from './components/Register'
import SignIn from './components/SignIn'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dassboard from './components/Dassboard'
import Reset from './components/Reset'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <SignIn/>
      },
      {
        path: 'register',
        element: <Register/>
      },
      {
        path: 'dassboard',
        element: <Dassboard/>
      },
      {
        path: 'reset',
        element: <Reset/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>,
)
