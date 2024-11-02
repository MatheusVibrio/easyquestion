import React from 'react';
import { useLocation } from 'react-router-dom';
import CabecalhoCriacao from '../../../components/CabecalhoCriacao';
import MainLayout from '../../../components/MainLayout';
export default function CriacaoCoordenador() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const correcaoId = queryParams.get('correcao');
  const tipo = queryParams.get('tipo');

  return (
    <MainLayout>
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">
          <CabecalhoCriacao correcao={correcaoId} tipo={tipo}  />
        </div>
      </div>
      </MainLayout>
  );
}
