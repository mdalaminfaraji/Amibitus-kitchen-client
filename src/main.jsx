import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './component/Home.jsx';
import { element } from 'prop-types';
import Login from './component/Login';
import Register from './component/Register';
import Blog from './component/Blog';
import Contact from './component/Contact';
import About from './component/About';
import ErrorPage from './component/Errorpage';
import AuthProviders from './Providers/AuthProviders';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"login",
        element:<Login></Login>
      },
      {
        path:"register",
        element:<Register></Register>
      },
      {
        path:"blog",
        element:<Blog></Blog>
      },
      {
        path:"contact",
        element:<Contact></Contact>
      },
      {
        path:"about",
        element:<About></About>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
    
  </React.StrictMode>,
)
