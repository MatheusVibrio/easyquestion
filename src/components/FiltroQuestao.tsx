import React, { useEffect, useState } from "react";
import TabelaBancoQuestoes from "./TabelaBancoQuestoes";
import { useAuth } from "../contexts/auth";
import api from "../api/api";
import { toast } from "react-toastify";

export default function FiltroQuestao(aceitaSelecao: any){
  const [questao, setQuestao] = useState<string>("");
  const [disciplina, setDisciplina] = useState<string>("");
  const [curso, setCurso] = useState<string>("");
  const [keywords, setKeywords] = useState<string[]>([]);
  const [dificuldade, setDificuldade] = useState<string>("");
  const [questoes, setQuestoes] = useState<any[]>([]);
  const [filteredQuestoes, setFilteredQuestoes] = useState<any[]>([]);
  const [disciplinas, setDisciplinas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const userId = user?.id_usuario;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Filtra as questões após o envio do formulário
    const filtered = questoes.filter(q => {
      const matchesQuestao = questao ? q.enunciado?.includes(questao) : true;
      const matchesDisciplina = disciplina ? q.disciplina === disciplina : true;
      const matchesCurso = curso ? q.curso?.includes(curso) : true;
      const matchesDificuldade = dificuldade ? q.dificuldade === dificuldade : true;

      return matchesQuestao && matchesDisciplina && matchesCurso && matchesDificuldade;
    });

    setFilteredQuestoes(filtered);
  };

  useEffect(() => {
    const fetchQuestoes = async () => {
      console.log("todas as questoes")
      if (!userId) return; // Garante que o userId existe

      try {
        const response = await api.get(`/questoes/minhasquestoes/${userId}`);
        setQuestoes(response.data);
        setFilteredQuestoes(response.data); // Inicializa os dados filtrados com todas as questões
      } catch (error) {
        console.error("Erro ao carregar questões:", error);
        toast.error("Erro ao carregar as questões.");
      } finally {
        setLoading(false); // Finaliza o estado de carregamento
      }
    };

    const fetchQuestoesAprovadas = async () => {
      console.log("todas as aprovadas")
      if (!userId) return; // Garante que o userId existe

      try {
        const response = await api.get(`/questoes/minhasquestoes/aprovadas/${userId}`);
        setQuestoes(response.data);
        setFilteredQuestoes(response.data); // Inicializa os dados filtrados com todas as questões
      } catch (error) {
        console.error("Erro ao carregar questões:", error);
        toast.error("Erro ao carregar as questões.");
      } finally {
        setLoading(false); // Finaliza o estado de carregamento
      }
    };

    aceitaSelecao.aceitaSelecao ? fetchQuestoesAprovadas() : fetchQuestoes();
  }, [userId]);

  useEffect(() => {
    const fetchDisciplinas = async () => {

      try {
        const response = await api.get(`/disciplina/${user?.fk_id_curso.id_curso}`);
        setDisciplinas(response.data);
      } catch (error) {
        console.error("Erro ao carregar disciplinas:", error);
        toast.error("Erro ao carregar disciplinas.");
      }
    };

    fetchDisciplinas();
  }, []);

  const handleQuestaoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestao(event.target.value);
  };

  const handleDisciplinaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDisciplina(event.target.value);
  };

  const handleCursoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurso(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>, setValue: (value: string) => void) => {
    if (event.key === "Enter" && event.currentTarget.value.trim() !== "") {
      event.preventDefault();
      setKeywords([...keywords, event.currentTarget.value.trim()]);
      setValue("");
    }
  };

  const handleDificuldadeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDificuldade(event.target.value);
  };

  return (
    <div>
      <form className="flex-column" onSubmit={handleSubmit}>
        <div className="flex justify-between gap-6">
          {/* Questão */}
          <div className="flex-column w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900">Buscar questão</label>
            <input
              type="text"
              value={questao}
              onChange={handleQuestaoChange}
              onKeyPress={(event) => handleKeyPress(event, setQuestao)}
              placeholder="Busque a questão desejada"
              className="w-full p-2 border border-gray-300 rounded mb-3 text-xs"
            />
          </div>

          {/* Disciplina */}
          <div className="flex-column w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900">Disciplina</label>
            <select
          value={disciplina}
          onChange={(e) => setDisciplina(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-3 text-xs"
          required
        >
          {disciplinas.map((disciplina: any) => (
            <option key={disciplina.id_disciplina} value={disciplina.id_disciplina}>
              {disciplina.descricao}
            </option>
          ))}
        </select>
          </div>

          {/* Dificuldade */}
          <div className="flex-column w-full">
            <label className="block mb-4 text-sm font-medium text-gray-900">Dificuldade</label>
            <div className="flex">
              <div className="flex items-center me-4">
                <input
                  id="radio-facil"
                  type="radio"
                  value="fácil"
                  name="dificuldade"
                  onChange={handleDificuldadeChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor="radio-facil" className="ms-2 text-xs font-medium text-gray-900">Fácil</label>
              </div>
              <div className="flex items-center me-4">
                <input
                  id="radio-medio"
                  type="radio"
                  value="médio"
                  name="dificuldade"
                  onChange={handleDificuldadeChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor="radio-medio" className="ms-2 text-xs font-medium text-gray-900">Médio</label>
              </div>
              <div className="flex items-center me-4">
                <input
                  id="radio-dificil"
                  type="radio"
                  value="difícil"
                  name="dificuldade"
                  onChange={handleDificuldadeChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor="radio-dificil" className="ms-2 text-xs font-medium text-gray-900">Difícil</label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center my-1"
          >
            Buscar
          </button>
        </div>
      </form>
      <TabelaBancoQuestoes aceitaSelecao={aceitaSelecao} questoes={filteredQuestoes} reprovadas={false}/>
    </div>
  );
}
