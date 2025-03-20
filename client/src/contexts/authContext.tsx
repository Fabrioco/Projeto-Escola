"use client";

import axios, { AxiosError } from "axios";
import React from "react";
import { useRouter } from "next/navigation";

type SignInProps = {
  email: string;
  password: string;
  keepLogged: boolean;
  role: string;
};

type UserProps = {
  name: string;
  email: string;
  password: string;
  class_id?: number;
  period?: string;
  admin?: boolean;
};

type AuthContextType = {
  signIn: ({ email, password, keepLogged, role }: SignInProps) => Promise<void>;
  loading: boolean;
  logOut: () => void;
  user: UserProps | null;
  fetchUser: () => Promise<void>;
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

const AuthContext = React.createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const router = useRouter();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<UserProps | null>(null);

  const api = "http://localhost:5000";

  const signIn = async ({ email, password, keepLogged, role }: SignInProps) => {
    try {
      setLoading(true);
      const res = await axios.post(`${api}/api/auth/${role}/login`, {
        email,
        password,
        keepLogged,
      });
      console.log(res.data.token.token);
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token.token);
        if (role === "student") {
          router.push("/student");
        } else if (role === "teacher") {
          router.push("/teacher");
        } else {
          router.push("/coordinator");
        }
      }
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        console.log("Erro na requisição", {
          status: error.response.status,
          data: error.response.data.error,
          url: error.config?.url,
        });
      } else {
        console.log("Erro desconhecido", error);
      }
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get(`${api}/api/auth/verify/coordinator`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setUser(response.data);
          }
        })
        .catch((error) => {
          if (error instanceof AxiosError && error.response) {
            console.log("Erro na requisição", {
              status: error.response.status,
              data: error.response.data.error,
              url: error.config?.url,
            });
          } else {
            console.log("Erro desconhecido", error);
          }
        });
    }
  };

  const logOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ signIn, loading, logOut, user, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usando dentro do AuthProvider");
  }
  return context;
};
