import React from 'react';
import { createBrowserRouter } from "react-router";
import HomeLayOut from '../Layout/HomeLayOut';
import HomePage from '../Pages/HomePage';
import CategoryNews from '../Pages/CategoryNews';

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
        element:<CategoryNews></CategoryNews>
      }
    ]
  },
]);


export default Router;