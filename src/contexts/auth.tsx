import React, { createContext, useState, useEffect, useContext, PropsWithChildren } from 'react';
import api from '../api/api';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  Login(user: object): Promise<void>;
  Logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    const storagedUser = sessionStorage.getItem('@App:user');
    const storagedToken = sessionStorage.getItem('@App:token');

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  async function Login({email, senha}: any) {
    console.log(email, senha)
    const response = await api.post('/sessions', { email, senha });

    setUser(response.data.user);
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    sessionStorage.setItem('@App:user', JSON.stringify(response.data.user));
    sessionStorage.setItem('@App:token', response.data.token);
  }

  function Logout() {
    setUser(null);
    console.log("entrou aqui auth")
    sessionStorage.removeItem('@App:user');
    sessionStorage.removeItem('App:token');
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, Login, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}