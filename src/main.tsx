import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Scene from './components/Scene.jsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Scene />
    {/* <App /> */}
  </React.StrictMode>,
)
