import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Electronics from './pages/Industries/Electronics.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,} from "react-router-dom";
import Automobile from './pages/Industries/Automobile.jsx'
import Packaging from './pages/Industries/Packaging.jsx'
import Pharmaeuticals from './pages/Industries/Pharmaeuticals.jsx'
import Sme from './pages/Platforms/Sme.jsx'

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement:<ErrorPage></ErrorPage>
    },
    {
      path: "/industries/electronics",
      element: <Electronics></Electronics>,
      
    },
    {
      path: "/industries/automobile",
      element: <Automobile></Automobile>,
      
    },
    {
      path: "/industries/packaging",
      element: <Packaging></Packaging>,
      
    },
    {
      path: "/industries/pharmaeuticals",
      element: <Pharmaeuticals></Pharmaeuticals>,
      
    },
    {
      path: "/platforms/aicansme",
      element: <Sme></Sme>,
      
    },
  ]);
ReactDOM.createRoot(document.getElementById('root')).render(
 
  
    <RouterProvider router={router} />
  
)
