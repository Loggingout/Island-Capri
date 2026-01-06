import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//Add react-router-dom
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
