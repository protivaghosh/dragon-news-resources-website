import React from 'react';
import { createBrowserRouter } from "react-router";
import HomeLayOut from '../Layout/HomeLayOut';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut></HomeLayOut>
  },
]);


export default Router;