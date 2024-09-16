import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Reprovadas from '../pages/correcao';
import Criacao from '../pages/criacao';
import Aprovadas from '../pages/aprovadas';
import ProvaOnline from '../pages/prova-online';
import MinhasQuestoes from '../pages/minhas-questoes';
import CriarProva from '../pages/criar-prova';
import QuestoesCoordenador from '../pages/Coordenador/questoes';
import AprovadasCoordenador from '../pages/Coordenador/aprovadas';
import ReprovadasCoordenador from '../pages/Coordenador/reprovadas';
import CriarNovoUsuario from '../pages/Coordenador/novo-usuario';
import Configuracoes from '../pages/configuracoes';

const OtherRoutes: React.FC = () => {
 return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
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
    </BrowserRouter>
 );
};

export default OtherRoutes;