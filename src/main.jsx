//https://programming-3306.s2462.workers.dev/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodolistApp />
  </StrictMode>,
)
