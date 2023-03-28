import React from 'react'
import ReactDOM from 'react-dom/client'
import "reset-css"    // 置于APP前，防止样式覆盖
import "./assets/"
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
