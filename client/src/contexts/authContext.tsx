"use client";

import axios from "axios";
import React from "react";

type SignInProps = {
  email: string;
  password: string;
  keepLogged: boolean;
  role: string;
};

type AuthContextType = {
  signIn: ({ email, password, keepLogged, role }: SignInProps) => Promise<void>;
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

const api = "http://localhost:5000";

const AuthContext = React.createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const signIn = async ({ email, password, keepLogged, role }: SignInProps) => {
    try {
      const res = await axios.post(`${api}/api/auth/${role}/login`, {
        email,
        password,
        keepLogged,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usando dentro do AuthProvider");
  }
  return context;
};
