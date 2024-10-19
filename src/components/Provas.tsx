import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import { useAuth } from "../contexts/auth";

export default function Provas() {
  const [provas, setProvas] = useState([]);
  const navigate = useNavigate();
  const { user } = useAuth();
  const storedQuestoes = localStorage.getItem("selectedQuestoes");

  if (storedQuestoes) {
    const questoesIds = JSON.parse(storedQuestoes);
    console.log("aqui: ")
    console.log(questoesIds);
  }

  const fetchProvas = async () => {
    try {
      const response = await api.get(`/provas/${user?.id_usuario}`); 
      setProvas(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao buscar provas:", error);
    }
  };

  useEffect(() => {
    if(user){
      fetchProvas();
    }

    
  }, []);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center my-2">
        <h3 className="flex items-center mb-3 font-semibold text-gray-900">Provas</h3>
        <a
          href="/criar-prova"
          className="font-medium text-white bg-blue-800 px-3 py-1.5 rounded-md text-xs hover:underline"
        >
          Criar nova prova
        </a>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">Nome</th>
              <th scope="col" className="px-6 py-3">Disciplina</th>
              <th scope="col" className="px-6 py-3">Curso</th>
              <th scope="col" className="px-6 py-3">Questões</th>
              <th scope="col" className="px-6 py-3">Ações</th>
            </tr>
          </thead>
          <tbody>
            {provas.length > 0 ? (
              provas.map((prova: any, index: any) => (
                <tr
                  key={index}
                  className="odd:bg-white even:bg-gray-50 border-b"
                >
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {prova.descricao}
                  </th>
                  <td className="px-6 py-4">{prova.disciplina}</td>
                  <td className="px-6 py-4">{prova.curso}</td>
                  <td className="px-6 py-4">{prova.questoes}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <a href="#" className="font-medium text-blue-600 hover:underline">Gerar</a>
                    <a href="#" className="font-medium text-red-600 hover:underline">Excluir</a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center">Nenhuma prova encontrada</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
