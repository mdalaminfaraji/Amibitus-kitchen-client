import React from 'react';
import ReactDOM from "react-dom/client";

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from '../layout/Main/Main';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:"login",
            element:
        }
      ]
    },
  ]);


const Route = () => {
    return (
        <div>
            
        </div>
    );
};

export default Route;