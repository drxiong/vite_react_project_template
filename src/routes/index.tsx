import React, { Suspense } from 'react'
import { RouteObject, useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

const routeObjects: RouteObject[] = [
  {
    path: '/',
    element: (
      <Suspense>
        <Home />
      </Suspense>
    )
  },
  {
    path: '/about',
    element: (
      <Suspense>
        <About />
      </Suspense>
    ),
  }
]

function Pages() {
    const routes = useRoutes(routeObjects)
    return routes
  }
  
  export default Pages

