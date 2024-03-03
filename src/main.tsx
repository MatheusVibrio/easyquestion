import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom"
import './styles/globals.css'
import './styles/fonts.css'
import Home from './pages/home'
import Login from './pages/login'
import Criacao from './pages/criacao'
import Processamento from './pages/processamento'
import Configuracoes from './pages/configuracoes'
import ProvaOnline from './pages/prova-online'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/criacao" element={<Criacao />} />
        <Route path="/processamento" element={<Processamento />} />
        <Route path="/prova-online" element={<ProvaOnline />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)