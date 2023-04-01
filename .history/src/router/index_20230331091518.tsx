import Home from "../views/Home"
import {Navigate} from "react-router-dom"


const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />
  }, 
  {
    path: "/",
    element: <Home />
  }
]

export default routes
