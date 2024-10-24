import { useEffect, useState } from "react";
import FiltroQuestao from "../../components/FiltroQuestao";
import { useAuth } from "../../contexts/auth";
import { ClipLoader } from "react-spinners";
import MainLayout from "../../components/MainLayout";

export default function MinhasQuestoes() {
  const { user } = useAuth();
  const userId = user?.id_usuario;
  
  if (!userId) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ClipLoader color="#36d7b7" loading={true} size={50} />
      </div>
    );
  }

  return (
    <MainLayout>
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14 flex-column">
          <div className="w-full">
            <h3 className="flex items-center mb-3 font-semibold text-gray-900">
              Minhas questões
            </h3>
            
            <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-8 mb-4">
              <FiltroQuestao aceitaSelecao={false}/>
            </div>
            </div>
        </div>
      </div>
    </MainLayout>
  );
}
