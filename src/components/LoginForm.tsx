import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from 'js-cookie';

const LoginForm: React.FC<{ title: string; description: string }> = (props) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const { signed, Login } = useAuth();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await Login({
        email: email,
        senha: senha,
      });
  
      Cookies.set('id_usuario', response.user.id_usuario.toString()); 
      Cookies.set('token', response.token);
      Cookies.set('fk_id_tipo_descricao', response.isSupervisor ? 'Coordenador' : 'Professor');
  
      if (response.isSupervisor) {
        navigate(`/coordenador/questoes`);
      } else {
        navigate("/");
      }
    } catch (error: any) {
      console.error("Erro ao tentar fazer login:", error);
      if (error.response) {
        toast.error("Usuário ou senha incorretos!");
        console.error("Dados do erro:", error.response.data);
      }
    }
  };
  
  
  
  

  return (
    <div className="flex bg-white py-10 px-20 rounded-lg">
      <div className="flex items-center justify-center">
        <div className="space-y-8">
          <div>
            <h2 className="mt-6 text-left text-3xl text-gray-900 font-bold">
              {props.title}
            </h2>
            <p className="mt-2">{props.description}</p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="sr-only">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-900 focus:border-blue-900 focus:z-10 sm:text-sm"
                placeholder="E-mail"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Senha
              </label>
              <input
                id="password"
                name="senha"
                type="password"
                autoComplete="current-password"
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-900 focus:border-blue-900 focus:z-10 sm:text-sm"
                placeholder="Senha"
              />
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
              >
                Entrar
              </button>
            </div>
            <div className="flex items-center justify-center flex-col gap-6">
              <img
                src="/public/assets/images/logoUnifae.png"
                alt="Logo Unifae"
              />
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
