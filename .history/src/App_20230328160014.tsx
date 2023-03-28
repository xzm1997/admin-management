import { useState } from 'react'
import Comp1 from './components/Comp1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      顶级组件
      <Comp1></Comp1>
    </div>
  )
}

export default App
