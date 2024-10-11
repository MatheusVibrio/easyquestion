import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CabecalhoCriacao from "../../../components/CabecalhoCriacao";
import MainLayout from "../../../components/MainLayout";
import axios from "axios";
import api from "../../../api/api";
import { toast } from "react-toastify";

export default function CriacaoDisciplina() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const correcaoId = queryParams.get("correcao");

  const [nomeDisciplina, setNomeDisciplina] = useState("");
  const [cursos, setCursos] = useState([]);
  const [cursoSelecionado, setCursoSelecionado] = useState("");
  const [fk_id_curso, setFkIdCurso] = useState<number | null>(null);
  const [disciplinasPorCurso, setDisciplinasPorCurso] = useState([]);
  const [disciplinasExistentes, setDisciplinasExistentes] = useState([]);

  // Fetch de todas as disciplinas (para coordenador/supervisor)
  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await api.get("/cursos");
        setCursos(response.data);
      } catch (error) {
        console.error("Erro ao buscar cursos:", error);
      }
    };
    fetchCursos();
  }, []);

  // Fetch de disciplinas por curso
  useEffect(() => {
    const fetchDisciplinasPorCurso = async () => {
      console.log(fk_id_curso)
      if (fk_id_curso) {
        try {
          const response = await api.get(`/disciplina/${fk_id_curso}`);
          setDisciplinasPorCurso(response.data);
        } catch (error) {
          console.error("Erro ao carregar disciplinas por curso:", error);
        }
      }
    };
    fetchDisciplinasPorCurso();
  }, [fk_id_curso]);

  // Handler para cadastrar disciplina
  const handleCadastrarDisciplina = async () => {
    try {
      console.log(fk_id_curso, nomeDisciplina)
      const response = await api.post("/disciplina", {
        descricao: nomeDisciplina,
        fk_id_curso: fk_id_curso,
      });
      console.log("Disciplina cadastrada:", response.data);
      toast.success("Disciplina criada com sucesso!");
      setNomeDisciplina("");
    } catch (error) {
      console.error("Erro ao cadastrar disciplina:", error);
    }
  };

  return (
    <MainLayout>
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">
        <h3 className="mb-4 font-semibold text-gray-900">Cadastro de Disciplina</h3>
          {/* Formulário de Cadastro */}
          <div className="mb-4">
            <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-8 mb-4">
              <label
                htmlFor="curso"
                className="block text-sm font-medium text-gray-700"
              >
                Selecione o Curso
              </label>
              <select
                    id="fk_id_curso"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    value={fk_id_curso ?? ""}
                    onChange={(e) => setFkIdCurso(Number(e.target.value))}
                    required
                  >
                    <option value="">Selecione um curso</option>
                    {cursos.map((curso: any) => (
                      <option key={curso.id_curso} value={curso.id_curso}>
                        {curso.descricao}
                      </option>
                    ))}
                  </select>
              <div className="my-4">
              <label
                htmlFor="disciplina"
                className="block text-sm font-medium text-gray-700"
              >
                Nome da Disciplina
              </label>
              <input
                id="disciplina"
                value={nomeDisciplina}
                onChange={(e) => setNomeDisciplina(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Digite o nome da disciplina"
              />
            </div>

            <button
              onClick={handleCadastrarDisciplina}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
            >
              Cadastrar Disciplina
            </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
