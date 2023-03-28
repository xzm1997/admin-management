import { useState } from 'react'
import Comp1 from './components/Comp1'
import { Button } from 'antd';
import { UpCircleTwoTone } from "@ant-design/icons"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      顶级组件
      <Button type="primary">按钮</Button>
      <UpCircleTwoTone style={{ fontSize:'40px'}}/>
    </div>
  )
}

export default App
