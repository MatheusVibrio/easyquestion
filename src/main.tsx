import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom"
import './styles/globals.css'
import './styles/fonts.css'
import Home from './pages/login'
import Login from './pages/login'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)