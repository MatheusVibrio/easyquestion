import axios from "axios";
import api from "./api";


const createUser = async ({nome, telefone, email, senha}: any) => {
  try {
    const response = await api.post("/users", { nome, telefone, email, senha });
    return response.data; 
  } catch (error) {
    console.error("Erro ao criar usuário", error);
    throw error;
  }
};

export { createUser };
