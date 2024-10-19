import { useEffect, useState } from "react";
import NavBar from "../../../components/NavBar";
import SideBarCoordenador from "../../../components/SideBarCoordenador";
import TabelaBancoQuestoes from "../../../components/TabelaBancoQuestoes";
import api from "../../../api/api";
import { ClipLoader } from "react-spinners"; // Importando o loader
import { useAuth } from "../../../contexts/auth";
import MainLayout from "../../../components/MainLayout";

export default function AprovadasCoordenador() {
  const [questoes, setQuestoes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();
  const idUsuario = user?.id_usuario;

  useEffect(() => {
    const fetchQuestoesAprovadas = async () => {
      if (!idUsuario) return; // Verifica se idUsuario está disponível

      if (user) {
        try {
          setLoading(true);
          const response = await api.get(`/questoes/minhasquestoes/aprovadas/${idUsuario}`);
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
  }, [idUsuario]);

  // Exibe o loader enquanto os dados ou o idUsuario estão sendo carregados
  if (loading || !idUsuario) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ClipLoader color="#36d7b7" loading={true} size={50} />
      </div>
    );
  }

  // Exibe a mensagem de erro, se houver
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

            {/* Tabela de Questões Aprovadas */}
            <TabelaBancoQuestoes questoes={questoes} aceitaSelecao={false} reprovadas={false}/>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
