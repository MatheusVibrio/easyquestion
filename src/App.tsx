import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./pages/login";
import Home from "./pages/home";
import Reprovadas from "./pages/correcao";
import Criacao from "./pages/criacao";
import Aprovadas from "./pages/aprovadas";
import ProvaOnline from "./pages/prova-online";
import MinhasQuestoes from "./pages/minhas-questoes";
import CriarProva from "./pages/criar-prova";
import Configuracoes from "./pages/configuracoes";
import QuestoesCoordenador from "./pages/Coordenador/questoes";
import AprovadasCoordenador from "./pages/Coordenador/aprovadas";
import ReprovadasCoordenador from "./pages/Coordenador/reprovadas";
import CriarNovoUsuario from "./pages/Coordenador/novo-usuario";
import './styles/globals.css';
import './styles/fonts.css';
import { ToastContainer } from "react-toastify";
import CriacaoCoordenador from "./pages/Coordenador/criacao-coordenador";
import CriacaoDisciplina from "./pages/Coordenador/criacao-disciplina";
import MinhasQuestoesCoordenador from "./pages/Coordenador/minhas-questoes-coordenador";
import CriarProvaCoordenador from "./pages/Coordenador/criar-prova-coordenador";
import ProvaOnlineCoordenador from "./pages/Coordenador/prova-online-coordenador";

function App() {
  return (
    <Router>
      <ToastContainer
        style={{ zIndex: 9999 }} 
      />
      <Routes>
      
  {/* Rota de Login */}
  <Route path="/login" element={<Login />} />

  {/* Rotas protegidas para Coordenadores */}
  <Route element={<ProtectedRoute allowedRoles={["Coordenador"]} redirectTo="/login" />}>
    <Route path="/coordenador/questoes" element={<QuestoesCoordenador/>} />
    <Route path="/coordenador/minhas-questoes" element={<MinhasQuestoesCoordenador/>} />
    <Route path="/coordenador/criacao" element={<CriacaoCoordenador/>} />
    <Route path="/coordenador/aprovadas" element={<AprovadasCoordenador />} />
    <Route path="/coordenador/reprovadas" element={<ReprovadasCoordenador />} />
    <Route path="/coordenador/criar-usuario" element={<CriarNovoUsuario />} />
    <Route path="/coordenador/criar-disciplina" element={<CriacaoDisciplina />} />
    <Route path="/coordenador/provas" element={<ProvaOnlineCoordenador />} />
    <Route path="/coordenador/criar-prova" element={<CriarProvaCoordenador />} />
  </Route>

  {/* Rotas protegidas para Professores */}
  <Route element={<ProtectedRoute allowedRoles={["Professor"]} redirectTo="/login" />}>
    <Route path="/" element={<Home />} />
    <Route path="/questoes-reprovadas" element={<Reprovadas />} />
    <Route path="/criacao" element={<Criacao />} />
    <Route path="/questoes-aprovadas" element={<Aprovadas />} />
    <Route path="/provas" element={<ProvaOnline />} />
    <Route path="/minhas-questoes" element={<MinhasQuestoes />} />
    <Route path="/criar-prova" element={<CriarProva />} />
    <Route path="/configuracoes" element={<Configuracoes />} />
  </Route>
</Routes>

    </Router>
  );
}

export default App;
