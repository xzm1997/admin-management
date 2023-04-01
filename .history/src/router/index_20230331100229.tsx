import React, { lazy } from "react"
import Home from "../views/Home"
// import About from "../views/About"

// 懒加载
const About = lazy(() => import("../views/About"))
const User = lazy(() => import("../views/User"))

// Navigate 重定向组件
import {Navigate} from "react-router-dom"

const withLoadingComponent = (comp) => (
  <React.Suspense fallback={<div>Loading...</div>}>
    {comp}
  </React.Suspense>
)

const routes = [
  {
    path: "/",
    element: <Navigate to="/home"/>
  }, 
  {
    path: "/home",
    element: <Home />
  }, 
  {
    path: "/about",
    element: 
      
  }, 
  {
    path: "/user",
    element: 
      <React.Suspense fallback={<div>Loading...</div>}>
        <User />
      </React.Suspense>
  }
]

export default routes
