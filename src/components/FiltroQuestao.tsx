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

  const removeAcentos = (str: string) => 
  str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const handleClear = () => {
  setQuestao('');        
  setDisciplina('');      
  setCurso('');           
  setDificuldade('');     
  setFilteredQuestoes(questoes); // Exibe todas as questões
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const filtered = questoes.filter(q => {
      const matchesQuestao = questao && typeof questao === 'string' && questao.trim() !== '' 
      ? removeAcentos(q.enunciado)?.toUpperCase().trim().includes(removeAcentos(questao).toUpperCase().trim()) 
      : true;

      
      const matchesDisciplina = disciplina 
      ? removeAcentos(String(q.fk_id_disciplina))?.toUpperCase().trim() === removeAcentos(String(disciplina)).toUpperCase().trim() 
      : true;

      const matchesCurso = curso && typeof curso === 'string' && curso.trim() !== '' 
      ? removeAcentos(q.curso)?.toUpperCase().trim().includes(removeAcentos(curso).toUpperCase().trim()) 
      : true;

      const matchesDificuldade = dificuldade && typeof dificuldade === 'string' && dificuldade.trim() !== '' 
      ? removeAcentos(q.dificuldade)?.toUpperCase().trim() === removeAcentos(dificuldade).toUpperCase().trim() 
      : true;

      return matchesQuestao && matchesDisciplina && matchesCurso && matchesDificuldade;
    });

    setFilteredQuestoes(filtered);
  };

  useEffect(() => {
    const fetchQuestoes = async () => {
      if (!userId) return;

      try {
        const response = await api.get(`/questoes/minhasquestoes/${userId}`);
        setQuestoes(response.data);
        setFilteredQuestoes(response.data); 
      } catch (error) {
        console.error("Erro ao carregar questões:", error);
        toast.error("Erro ao carregar as questões.");
      } finally {
        setLoading(false); 
      }
    };

    const fetchQuestoesAprovadas = async () => {
      if (!userId) return; 

      try {
        const response = await api.get(`/questoes/minhasquestoes/aprovadas/${userId}`);
        setQuestoes(response.data);
        setFilteredQuestoes(response.data);
      } catch (error) {
        console.error("Erro ao carregar questões:", error);
        toast.error("Erro ao carregar as questões.");
      } finally {
        setLoading(false);
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

          <div className="flex-column w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900">Disciplina</label>
            <select
              value={disciplina}
              onChange={(e) => setDisciplina(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-3 text-xs"
            >
              <option value="">Selecione a disciplina</option> 
              {disciplinas.map((disciplina: any) => (
                <option key={disciplina.id_disciplina} value={disciplina.id_disciplina}>
                  {disciplina.descricao}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-column w-full">
            <label className="block mb-4 text-sm font-medium text-gray-900">Dificuldade</label>
            <div className="flex">
              <div className="flex items-center me-4">
                <input
                  id="radio-facil"
                  type="radio"
                  value="fácil"
                  name="dificuldade"
                  checked={dificuldade === 'fácil'}
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
                  checked={dificuldade === 'médio'}
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
                  checked={dificuldade === 'difícil'}
                  onChange={handleDificuldadeChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor="radio-dificil" className="ms-2 text-xs font-medium text-gray-900">Difícil</label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-2">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center my-1"
          >
            Buscar
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center my-1"
          >
            Limpar
          </button>
        </div>
      </form>
      <TabelaBancoQuestoes aceitaSelecao={aceitaSelecao} questoes={filteredQuestoes} reprovadas={false}/>
    </div>
  );
}