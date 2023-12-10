import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './compomemts/App/App.tsx'
import '../src/assets/styles/global.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
