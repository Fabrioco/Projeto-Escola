import {
  TeacherContextType,
  TeacherProviderType,
  TeacherUserProps,
} from "@/types/TeacherContextType";
import axios from "axios";
import React from "react";

const TeacherContext = React.createContext<TeacherContextType | null>(null);

export const TeacherProvider: React.FC<TeacherProviderType> = ({
  children,
}) => {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [teacherId, setTeacherId] = React.useState<number>(0);
  const [allTeachers, setAllTeachers] = React.useState<TeacherUserProps[]>([]);
  const [edit, setEdit] = React.useState<boolean>(false);

  const addTeacher = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/create/teacher", {
        name,
        email,
        password,
      })
      .then((res) => {
        if (res.status === 201) {
          fetchAllTeachers();
          alert("Professor criado");
        }
      })
      .catch((error) => console.log(error));
  };

  const fetchAllTeachers = async () => {
    await axios
      .get("http://localhost:5000/api/teacher")
      .then((res) => {
        console.log(res.data);
        setAllTeachers(res.data);
      })
      .catch((error) => console.log(error));
  };

  const fetchTeacher = async (id: number) => {
    await axios
      .get(`http://localhost:5000/api/teacher/${id}`)
      .then((res) => {
        console.log(res.data);
        setTeacherId(res.data.id);
        setName(res.data.name);
        setEmail(res.data.email);
        setPassword(res.data.password);
      })
      .catch((error) => console.log(error));
  };

  const updateTeacher = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = teacherId;
    await axios
      .put(`http://localhost:5000/api/teacher/${id}`, {
        name,
        email,
      })
      .then((res) => {
        console.log(res.data);
        fetchAllTeachers();
      })
      .catch((error) => console.log(error));
  };

  const deleteTeacher = async () => {
    const id = teacherId;
    await axios
      .delete(`http://localhost:5000/api/teacher/${id}`)
      .then((res) => {
        console.log(res.data);
        fetchAllTeachers();
      })
      .catch((error) => console.log(error));
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setEdit(false);
  };

  React.useEffect(() => {
    fetchAllTeachers();
  }, []);

  return (
    <TeacherContext.Provider
      value={{
        addTeacher,
        fetchAllTeachers,
        fetchTeacher,
        updateTeacher,
        deleteTeacher,
        clearForm,
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        teacherId,
        setTeacherId,
        allTeachers,
        setAllTeachers,
        edit,
        setEdit,
      }}
    >
      {children}
    </TeacherContext.Provider>
  );
};

export const useTeacherContext = () => {
  const context = React.useContext(TeacherContext);
  if (!context) {
    throw new Error(
      "useTeacherContext deve ser usado dentro do TeacherProvider"
    );
  }
  return context;
};
