import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Router from './Router/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
