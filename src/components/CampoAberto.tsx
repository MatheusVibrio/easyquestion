import React, { useState } from "react";
import axios from "axios";
import api from "../api/api";
import { toast } from "react-toastify";

export default function CampoAberto({ token, userId, keywords }: any) {
  const [enunciado, setEnunciado] = useState("");
  const [descricaoResposta, setDescricaoResposta] = useState("");

  const cadastrarQuestao = async (event: any) => {
    event.preventDefault();

    const questaoData = {
      enunciado: enunciado,
      fk_tipo: 2,
      fk_id_usuario: userId,
      fk_id_dificuldade: 1,
      fk_id_disciplina: 1,
    };

    try {
      const response = await api.post('/questoes', questaoData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      console.log("Questão cadastrada:", response.data);

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

    console.log(respostaData)
    try {
      const response = await api.post('/questoes/respostas', respostaData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      console.log("Resposta cadastrada:", response.data);
    } catch (error) {
      console.error("Erro ao cadastrar resposta:", error);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-900">
        Enunciado
      </label>
      <p className="block mb-2 text-xs font-normal text-gray-600">Escreva aqui o enunciado da questão.</p>
      <textarea
        value={enunciado}
        onChange={(e) => setEnunciado(e.target.value)}
        className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50"
        rows={3}
      />

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
        className="mt-2 p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Cadastrar Questão
      </button>
    </div>
  );
}
