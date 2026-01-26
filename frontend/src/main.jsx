import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import { NavBar, Footer, Contact } from './components/App.jsx'
// import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <App />
    <Contact />
    <Footer />
  </StrictMode>,
)