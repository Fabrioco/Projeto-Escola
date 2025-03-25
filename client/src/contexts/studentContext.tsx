"use client";

import { UserProps } from "@/types/AuthContextType";
import { ClassesProps } from "@/types/ClassContextType";
import {
  StudentContextType,
  StudentProviderType,
} from "@/types/StudentContextType";
import axios, { AxiosError } from "axios";
import React from "react";

const StudentContext = React.createContext<StudentContextType | null>(null);

export const StudentProvider: React.FC<StudentProviderType> = ({
  children,
}) => {
  const [nameStudent, setNameStudent] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [classId, setClassId] = React.useState<string>("");
  const [period, setPeriod] = React.useState<string>("");

  const [students, setStudents] = React.useState<UserProps[]>([]);
  const [classesList, setClassesList] = React.useState<ClassesProps[]>([]);
  const [edit, setEdit] = React.useState<boolean>(false);
  const [userId, setUserId] = React.useState<number>(0);

  const addStudent = async () => {
    if (!nameStudent || !email || !password || !classId || !period) {
      alert("Preencha todos os campos");
      return;
    }

    await axios
      .post("http://localhost:5000/api/create/student", {
        name: nameStudent,
        email,
        password,
        class_id: classId,
        period,
      })
      .then(() => {
        getAllStudents();
        cleanForm();
        alert("Estudante cadastrado com sucesso");
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
  };

  const getAllStudents = async () => {
    await axios
      .get("http://localhost:5000/api/student")
      .then((res) => {
        setStudents(res.data);
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
  };

  const fetchClass = async () => {
    await axios
      .get(`http://localhost:5000/api/class`)
      .then((res) => {
        setClassesList(res.data);
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
  };

  const handlePullData = async (id: number) => {
    setEdit(true);
    await axios.get(`http://localhost:5000/api/student/${id}`).then((res) => {
      console.log(res.data);
      setUserId(res.data.id);
      setNameStudent(res.data.name);
      setEmail(res.data.email);
      setPassword(res.data.password);
      setClassId(res.data.class_id ? res.data.class_id : "");
      setPeriod(res.data.period);
    });
  };

  const updateStudent = async () => {
    await axios
      .put(`http://localhost:5000/api/student/${userId}`, {
        name: nameStudent,
        email,
        password,
        class_id: classId,
        period,
      })
      .then(() => {
        getAllStudents();
        cleanForm();
        alert("Estudante atualizado com sucesso");
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
  };

  const deleteStudent = async (id: number) => {
    await axios
      .delete(`http://localhost:5000/api/student/${id}`)
      .then(() => {
        getAllStudents();
        alert("Estudante deletado com sucesso");
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
  };

  const cleanForm = () => {
    setNameStudent("");
    setEmail("");
    setPassword("");
    setClassId("");
    setPeriod("");
    setEdit(false);
  };

  React.useEffect(() => {
    getAllStudents();
    fetchClass();
  }, []);

  return (
    <StudentContext.Provider
      value={{
        addStudent,
        getAllStudents,
        fetchClass,
        handlePullData,
        updateStudent,
        deleteStudent,
        cleanForm,
        nameStudent,
        setNameStudent,
        email,
        setEmail,
        password,
        setPassword,
        classId,
        setClassId,
        period,
        setPeriod,
        students,
        setStudents,
        classesList,
        setClassesList,
        edit,
        setEdit,
        userId,
        setUserId,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudentContext = () => {
  const context = React.useContext(StudentContext);
  if (!context) {
    throw new Error(
      "useStudentContext deve ser usado dentro do StudentProvider"
    );
  }
  return context;
};
