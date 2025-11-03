import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import './bg-anim.js'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Hide preloader after mount
window.addEventListener('load', () => {
  const pre = document.getElementById('preloader')
  if (pre) {
    pre.classList.add('preloader-hide')
    setTimeout(() => pre.remove(), 900)
  }
})

