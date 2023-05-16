import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { ReactDOM } from 'react';
import {
  createBrowserRouter,
  RouterProvider,} from "react-router-dom";

import './index.css'
const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
    },
  ]);
ReactDOM.createRoot(document.getElementById('root')).render(
 
  
    <RouterProvider router={router} />
  
)
