import React, { lazy } from "react"
import Home from "../views/Home"
// import About from "../views/About"

// 懒加载
const About = lazy(() => import("../views/About"))
const User = lazy(() => import("../views/User"))

// Navigate 重定向组件
import {Navigate} from "react-router-dom"


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
      <React.Suspense fallback={<div>loading</div>}
  }, 
  {
    path: "/user",
    element: <User />
  }
]

export default routes
