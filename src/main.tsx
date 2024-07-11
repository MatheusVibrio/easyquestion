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
import Configuracoes from './pages/configuracoes'
import ProvaOnline from './pages/prova-online'
import CriarProva from './pages/criar-prova'
import MinhasQuestoes from './pages/minhas-questoes'
import Aprovadas from './pages/aprovadas'
import Reprovadas from './pages/correcao'
import QuestoesCoordenador from './pages/Coordenador/questoes'
import ReprovadasCoordenador from './pages/Coordenador/reprovadas'
import AprovadasCoordenador from './pages/Coordenador/aprovadas'
import CriarNovoUsuario from './pages/Coordenador/novo-usuario'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/questoes-reprovadas" element={<Reprovadas />} />
        <Route path="/criacao" element={<Criacao />} />
        <Route path="/questoes-aprovadas" element={<Aprovadas />} />
        <Route path="/prova-online" element={<ProvaOnline />} />
        <Route path="/minhas-questoes" element={<MinhasQuestoes />} />
        <Route path="/criar-prova" element={<CriarProva />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
        <Route path="/coordenador/questoes" element={<QuestoesCoordenador />} />
        <Route path="/coordenador/aprovadas" element={<AprovadasCoordenador />} />
        <Route path="/coordenador/reprovadas" element={<ReprovadasCoordenador />} />
        <Route path="/coordenador/criar-usuario" element={<CriarNovoUsuario />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)