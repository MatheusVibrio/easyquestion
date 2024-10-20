import React, { useEffect, useState } from "react";
import axios from "axios";
import api from "../api/api";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/auth";

export default function CampoAberto({ token, userId, keywords, fk_id_curso }: any) {
  const [enunciado, setEnunciado] = useState("");
  const [descricaoResposta, setDescricaoResposta] = useState("");
  const [fkDisciplina, setFkDisciplina] = useState<any>(1);
  const [disciplinas, setDisciplinas] = useState<any[]>([]);
  const [fkDificuldade, setFkDificuldade] = useState(1);  

  const { user } = useAuth()

  useEffect(() => {
    if (user) {
    const fetchDisciplinas = async () => {
     
      try {
        const response = await api.get(`/disciplina/${fk_id_curso}`);
        setDisciplinas(response.data);
        if (response.data.length > 0) {
            setFkDisciplina(response.data[0].id_disciplina); 
          }
      } catch (error) {
        console.error('Erro ao carregar disciplinas:', error);
      }
    };
    fetchDisciplinas();
  }

  }, [token]);

  const cadastrarQuestao = async (event: any) => {
    event.preventDefault();

    const questaoData = {
      enunciado: enunciado,
      fk_tipo: 2,
      fk_id_usuario: userId,
      fk_id_dificuldade: fkDificuldade,
      fk_id_disciplina: fkDisciplina,
    };

    try {
      const response = await api.post('/questoes', questaoData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      cadastrarResposta(response.data.id_questao);

      const marcadores = keywords.map((keyword: string) => ({
        fk_id_questao: response.data.id_questao,
        marcador: keyword,
      }));


      await Promise.all(
        marcadores.map((marcador: any) =>
          api.post('/questoes/marcadores', marcador, {
            headers: { Authorization: `Bearer ${token}` },
          })
        )
      );

      toast.success("Questão cadastrada com sucesso!");

      setTimeout(() => {
        window.location.reload();
      }, 2000); // 2 segundos de atraso

    } catch (error) {
      console.error("Erro ao cadastrar questão:", error);
    }
  };

  const cadastrarResposta = async (idQuestao: any) => {
    const respostaData = {
      descricao: descricaoResposta,
      fg_correta: "S",
      fk_id_questao: idQuestao,
    };

    try {
      const response = await api.post('/questoes/respostas', respostaData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      console.error("Erro ao cadastrar resposta:", error);
    }
  };

  return (
    <div>
      <label className="block text-sm mt-2 font-medium text-gray-900">
        Enunciado
      </label>
      <p className="block mb-2 text-xs font-normal text-gray-600">Escreva aqui o enunciado da questão.</p>
      <textarea
        value={enunciado}
        onChange={(e) => setEnunciado(e.target.value)}
        className="w-full mb-2 border border-gray-200 rounded-lg bg-gray-50"
        rows={3}
      />

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-900">Disciplina</label>
        <select
          value={fkDisciplina}
          onChange={(e) => setFkDisciplina(e.target.value)}
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

      <div className="mt-4 mb-4">
          <label className="block text-sm font-medium text-gray-900 my-2">Dificuldade</label>
          <div className="flex space-x-4">
            <label>
              <input
                type="radio"
                value={1}
                checked={fkDificuldade === 1}
                onChange={() => setFkDificuldade(1)}
                className="mr-2"

              /> 
              Fácil
            </label>
            <label>
              <input
                type="radio"
                value={2}
                checked={fkDificuldade === 2}
                onChange={() => setFkDificuldade(2)}
                className="mr-2"
              /> 
              Médio
            </label>
            <label>
              <input
                type="radio"
                value={3}
                checked={fkDificuldade === 3}
                onChange={() => setFkDificuldade(3)}
                className="mr-2"
              /> 
              Difícil
            </label>
          </div>
        </div>


      <label className="block text-sm font-medium text-gray-900">
        Descrição da Resposta
      </label>
      <p className="block mb-2 text-xs font-normal text-gray-600">Deixe aqui sua resposta comentada.</p>
      <textarea
        value={descricaoResposta}
        onChange={(e) => setDescricaoResposta(e.target.value)}
        className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50"
        rows={3}
      />

      <button
        onClick={cadastrarQuestao}
        className="mt-2 p-2 px-4 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Cadastrar Questão
      </button>
    </div>
  );
}
