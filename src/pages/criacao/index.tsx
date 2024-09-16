import React from 'react';
import { useLocation } from 'react-router-dom';
import CabecalhoCriacao from '../../components/CabecalhoCriacao';
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';

export default function Criacao() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const correcaoId = queryParams.get('correcao');

  console.log('Correcao ID:', correcaoId);

  return (
    <main className="bg-gray-100 h-screen">
      <SideBar />
      <NavBar />

      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">
          <CabecalhoCriacao correcao={correcaoId} />

          <div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-5"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
