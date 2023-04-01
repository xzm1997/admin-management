import Home from "../views/Home"

// Navigate 重定向组件
import {Navigate} from "react-router-dom"


const routes = [
  {
    path: "/",
    element: <Navigate to="/home"/>
  }, 
  {
    path: "/",
    element: <Home />
  }
]

export default routes
