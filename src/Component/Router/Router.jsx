import React from 'react';
import { createBrowserRouter } from "react-router";
import HomeLayOut from '../Layout/HomeLayOut';
import HomePage from '../Pages/HomePage';
import CategoryNews from '../Pages/CategoryNews';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AuthLayout from '../Layout/AuthLayout';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut></HomeLayOut>,
    children:[
      {
        path:"/",
        element:<HomePage></HomePage>
      },
      {
        path:"/category/:id",
        element:<CategoryNews></CategoryNews>,
        loader:()=> fetch("/news.json")
      }
    ]
  },
  {
    path:"/auth",
    element:<AuthLayout></AuthLayout>,
    children:[
      {
        path:"/auth/login",
        element:<Login></Login>
      },
    {
       path:"/auth/register",
       element:<Register></Register>
    }
    ]
  }
]);


export default Router;