"use client";
import { UserProps } from "@/types/AuthContextType";
import {
  CoordinatorContextType,
  CoordinatorProviderType,
} from "@/types/CoordinatorType";
import axios from "axios";
import React from "react";

const CoordinatorContext = React.createContext<CoordinatorContextType | null>(
  null
);

export const CoordinatorProvider: React.FC<CoordinatorProviderType> = ({
  children,
}) => {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const [allCoordinator, setAllCoordinator] = React.useState<UserProps[]>([]);
  const [edit, setEdit] = React.useState<boolean>(false);
  const [id, setId] = React.useState<number>(0);

  const addCoordinator = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/create/coordinator", {
        name,
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        fetchAllCoordinator();
        clearForm();
      })
      .catch((error) => {
        if (error instanceof axios.AxiosError && error.response) {
          console.log("Erro na requisição", {
            status: error.response.status,
            data: error.response.data.error,
            url: error.config?.url,
          });
        } else {
          console.log("Erro desconhecido", error);
        }
      });
  };

  const fetchAllCoordinator = async () => {
    await axios
      .get("http://localhost:5000/api/coordinator")
      .then((res) => {
        console.log(res.data);
        setAllCoordinator(
          res.data.sort((a: UserProps, b: UserProps) => a.id - b.id)
        );
      })
      .catch((error) => {
        if (error instanceof axios.AxiosError && error.response) {
          console.log("Erro na requisição", {
            status: error.response.status,
            data: error.response.data.error,
            url: error.config?.url,
          });
        } else {
          console.log("Erro desconhecido", error);
        }
      });
  };

  const fetchCoordinator = async (id: number) => {
    setId(id);
    await axios
      .get(`http://localhost:5000/api/coordinator/${id}`)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setPassword(res.data.password);
        setEdit(true);
      })
      .catch((error) => {
        if (error instanceof axios.AxiosError && error.response) {
          console.log("Erro na requisição", {
            status: error.response.status,
            data: error.response.data.error,
            url: error.config?.url,
          });
        } else {
          console.log("Erro desconhecido", error);
        }
      });
  };

  const updateCoordinator = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:5000/api/coordinator/${id}`, {
        name,
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        fetchAllCoordinator();
        setEdit(false);
        clearForm();
      })
      .catch((error) => {
        if (error instanceof axios.AxiosError && error.response) {
          console.log("Erro na requisição", {
            status: error.response.status,
            data: error.response.data.error,
            url: error.config?.url,
          });
        } else {
          console.log("Erro desconhecido", error);
        }
      });
  };

  const deleteCoordinator = async (id: number) => {
    await axios
      .delete(`http://localhost:5000/api/coordinator/${id}`)
      .then((res) => {
        console.log(res.data);
        fetchAllCoordinator();
      })
      .catch((error) => {
        if (error instanceof axios.AxiosError && error.response) {
          console.log("Erro na requisição", {
            status: error.response.status,
            data: error.response.data.error,
            url: error.config?.url,
          });
        }
      });
  };

  React.useEffect(() => {
    fetchAllCoordinator();
  }, []);

  const clearForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setEdit(false);
  };

  return (
    <CoordinatorContext.Provider
      value={{
        addCoordinator,
        fetchAllCoordinator,
        fetchCoordinator,
        deleteCoordinator,
        updateCoordinator,
        clearForm,
        allCoordinator,
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        edit,
        setEdit,
        id,
        setId,
        setAllCoordinator
      }}
    >
      {children}
    </CoordinatorContext.Provider>
  );
};

export const useCoordinator = () => {
  const context = React.useContext(CoordinatorContext);
  if (!context) {
    throw new Error("useCoordinator must be used within a CoordinatorProvider");
  }
  return context;
};
