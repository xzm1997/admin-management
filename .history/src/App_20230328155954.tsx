import { useState } from 'react'
import Comp from './components/Comp1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      顶级组件
      <Comp></Comp>
    </div>
  )
}

export default App
