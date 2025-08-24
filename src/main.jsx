import App from './App'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './fanta.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
