import React, { createContext, useState, useEffect, useContext, PropsWithChildren } from 'react';
import api from '../api/api';

interface TipoUsuario {
  id_tipo: number;
  descricao: string;
  fg_supervisor: string;
}

interface CursoUsuario {
  id_curso: number;
  descricao: string;
}

interface User {
  id_usuario: number;
  nome: string;
  email: string;
  telefone: string;
  fg_primeiro_acesso: string;
  created_at: string;
  updated_at: string;
  fk_id_tipo: TipoUsuario;
  fk_id_curso: CursoUsuario;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  token: string | null; 
  isSupervisor: boolean | null;
  Login(credentials: { email: string; senha: string }): Promise<LoginResponse>;
  Logout(): void;
}

interface LoginResponse {
  user: User;
  token: string;
  isSupervisor: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isSupervisor, setIsSupervisor] = useState<boolean | null>(null);

  useEffect(() => {
    const storagedUser = sessionStorage.getItem('@App:user');
    const storagedToken = sessionStorage.getItem('@App:token');
    const storagedSupervisor = sessionStorage.getItem('@App:isSupervisor');
  
    if (storagedToken && storagedUser && storagedSupervisor !== null) {
      setUser(JSON.parse(storagedUser));
      setToken(storagedToken);
      setIsSupervisor(storagedSupervisor === 'true');
  
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  async function Login({ email, senha }: { email: string; senha: string }): Promise<LoginResponse> {
    try {
      const response = await api.post('/sessions', { email, senha });
      setUser(response.data.user);
      setToken(response.data.token);
      api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
      
      sessionStorage.setItem('@App:user', JSON.stringify(response.data.user));
      sessionStorage.setItem('@App:token', response.data.token);
      sessionStorage.setItem('@App:isSupervisor', response.data.isSupervisor);

      return response.data;
    } catch (error) {
      console.error("Erro no login:", error);
      throw error;
    }
  }

  function Logout() {
    setUser(null);
    setToken(null);
    setIsSupervisor(null);
    api.defaults.headers.Authorization = '';
    sessionStorage.removeItem('@App:user');
    sessionStorage.removeItem('@App:token');
    sessionStorage.removeItem('@App:isSupervisor');
  }

  return (
    <AuthContext.Provider value={{ signed: Boolean(user), user, token, isSupervisor, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }

  return context;
}
