import React, { useEffect, useState } from "react";
import api from "../../api/api";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import TabelaBancoQuestoes from "../../components/TabelaBancoQuestoes";
import { useAuth } from "../../contexts/auth";
import { ClipLoader } from "react-spinners"; // Importa o loader
import MainLayout from "../../components/MainLayout";

export default function Aprovadas() {
  const [questoes, setQuestoes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { user } = useAuth();

  useEffect(() => {
    const fetchQuestoesAprovadas = async () => {
      
      if (!user?.id_usuario) return; // Aguarda até que o ID do usuário esteja disponível

      if (user) {
        try {
          setLoading(true);
          const response = await api.get(`/questoes/minhasquestoes/aprovadas/${user.id_usuario}`);
          setQuestoes(response.data);
        } catch (error) {
          setError("Erro ao buscar questões aprovadas");
          console.error("Erro ao buscar questões aprovadas:", error);
        } finally {
          setLoading(false);
        }
      }
      
    };

    fetchQuestoesAprovadas();
  }, [user?.id_usuario]); // Recarrega a função apenas quando user.id_usuario estiver disponível

  // Exibe o loader enquanto o ID do usuário ou as questões estão carregando
  if (loading || !user?.id_usuario) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ClipLoader color="#36d7b7" loading={loading} size={50} />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <MainLayout>
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14 flex-column">
          <div className="w-full">
            <h3 className="flex items-center mb-3 font-semibold text-gray-900">
              Questões aprovadas
            </h3>
            <TabelaBancoQuestoes questoes={questoes} aceitaSelecao={false} reprovadas={false} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
