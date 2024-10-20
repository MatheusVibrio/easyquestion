import React from 'react';
import { useLocation } from 'react-router-dom';
import CabecalhoCriacao from '../../components/CabecalhoCriacao';
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';
import MainLayout from '../../components/MainLayout';

export default function Criacao() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const correcaoId = queryParams.get('correcao');

  return (
    <MainLayout>
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">
          <CabecalhoCriacao correcao={correcaoId} />
        </div>
      </div>
    </MainLayout>
  );
}
