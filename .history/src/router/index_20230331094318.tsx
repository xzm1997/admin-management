import { lazy } from "react"
import Home from "../views/Home"
// import About from "../views/About"

const About = lazy(() => import("../views/About"))

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
    element: <About />
  }
]

export default routes
