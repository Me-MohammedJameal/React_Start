import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App as Ap, Web as Wp} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <h2>Me</h2>
  <StrictMode>
    <Ap />
    <Wp />
  </StrictMode>,
  </>
    
)
