import {
  DisciplineContextProviderProps,
  DisciplineContextType,
  DisciplineProps,
} from "@/types/DisciplineContextType";
import axios from "axios";
import React from "react";

const DisciplineContext = React.createContext<DisciplineContextType | null>(
  null
);

export const DisciplineProvider: React.FC<DisciplineContextProviderProps> = ({
  children,
}) => {
  const [name, setName] = React.useState<string>("");
  const [grade, setGrade] = React.useState<string>("");
  const [edit, setEdit] = React.useState<boolean>(false);
  const [id, setId] = React.useState<string>("");
  const [disciplines, setDisciplines] = React.useState<DisciplineProps[]>([]);

  const addDiscipline = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/discipline", {
        name,
        grade,
      })
      .then((res) => {
        console.log(res);
        clearForm();
        fetchAllDisciplines();
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

  const updateDiscipline = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:5000/api/discipline/${id}`, {
        name,
        grade,
      })
      .then((res) => {
        console.log(res);
        clearForm();
        fetchAllDisciplines();
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

  const fetchAllDisciplines = async () => {
    await axios
      .get("http://localhost:5000/api/discipline")
      .then((res) => {
        console.log(res);
        setDisciplines(res.data);
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

  const fetchDiscipline = async (id: number) => {
    await axios
      .get(`http://localhost:5000/api/discipline/${id}`)
      .then((res) => {
        setId(res.data.id);
        setName(res.data.name);
        setGrade(res.data.grade);
        setEdit(true);
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

  const deleteDiscipline = async (id: number) => {
    await axios
      .delete(`http://localhost:5000/api/discipline/${id}`)
      .then((res) => {
        console.log(res);
        fetchAllDisciplines();
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
    fetchAllDisciplines();
  }, []);

  const clearForm = () => {
    setName("");
    setGrade("");
    setEdit(false);
  };

  return (
    <DisciplineContext.Provider
      value={{
        name,
        setName,
        grade,
        setGrade,
        disciplines,
        setDisciplines,
        addDiscipline,
        fetchAllDisciplines,
        fetchDiscipline,
        deleteDiscipline,
        updateDiscipline,
        edit,
        setEdit,
        id,
        setId,
        clearForm,
      }}
    >
      {children}
    </DisciplineContext.Provider>
  );
};

export const useDisciplineContext = () => {
  const context = React.useContext(DisciplineContext);
  if (!context) {
    throw new Error(
      "useDisciplineContext deve usado dentro do DisciplineProvider"
    );
  }
  return context;
};
