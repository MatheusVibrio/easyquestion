import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import CabecalhoCriacao from '../../components/CabecalhoCriacao';
import MainLayout from '../../components/MainLayout';
import api from '../../api/api';

export default function Criacao() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const correcaoId = queryParams.get('correcao');
  const tipo = queryParams.get('tipo');

  const [questao, setQuestao] = useState(null);

  useEffect(() => {
    if (correcaoId) {
      api.get(`/questoes/${correcaoId}`)
        .then(response => {
          setQuestao(response.data);
        })
        .catch(error => console.error('Erro ao carregar questão:', error)); // Trata possíveis erros
    }
  }, [correcaoId]);

  return (
    <MainLayout>
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">
          <CabecalhoCriacao questao={questao} correcao={correcaoId} tipo={tipo}/>
        </div>
      </div>
    </MainLayout>
  );
}
