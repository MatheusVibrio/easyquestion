import { useState, useEffect } from "react";
import FiltroQuestao from "../../components/FiltroQuestao";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import TabelaBancoQuestoes from "../../components/TabelaBancoQuestoes";
import api from "../../api/api";
import { useAuth } from "../../contexts/auth";
import { ClipLoader } from "react-spinners"; 
import MainLayout from "../../components/MainLayout";

export default function Reprovadas() {
  const [questoes, setQuestoes] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const user = JSON.parse(sessionStorage.getItem('@App:user') || '{}');
  const id_usuario = user?.id_usuario;

  useEffect(() => {
    const fetchQuestoesReprovadas = async () => {
      if (!id_usuario) return;

      if (user) {
        try {
          const response = await api.get(`/questoes/minhasquestoes/reprovadas/${id_usuario}`);
          setQuestoes(response.data);
        } catch (err) {
          setError("Erro ao carregar as questões reprovadas.");
        } finally {
          setLoading(false); 
        }
      }
      
    };

    fetchQuestoesReprovadas();
  }, [id_usuario]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ClipLoader color="#36d7b7" loading={loading} size={50} />
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <MainLayout>
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14 flex-column">
          <div className="w-full">
            <h3 className="flex items-center mb-3 font-semibold text-gray-900">
              Questões reprovadas
            </h3>

            <TabelaBancoQuestoes questoes={questoes} aceitaSelecao={false} reprovadas={true}/>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
