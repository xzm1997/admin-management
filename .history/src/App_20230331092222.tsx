import { useState } from 'react'
import Comp1 from './components/Comp1'
import { Button } from 'antd';
import { UpOutlined } from "@ant-design/icons"
import { useRoutes, Link } from "react-router-dom"
import router from "./router"

function App() {
  const [count, setCount] = useState(0)
  useRoutes(router)
  return (
    <div className="App">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
    </div>
  )
}

export default App
