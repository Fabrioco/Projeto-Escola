"use client";

import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "./authContext";
import {
  ClassContextProps,
  ClassesProps,
  ClassProviderProps,
} from "@/types/ClassContextType";

const ClassContext = React.createContext<ClassContextProps | null>(null);

export const ClassProvider: React.FC<ClassProviderProps> = ({ children }) => {
  const { user } = useAuth();
  const [classes, setClasses] = useState<ClassesProps[] | null>(null);
  const [nameClassId, setNameClassId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [grade, setGrade] = useState<string>("");
  const [period, setPeriod] = useState<string>("");
  const [edit, setEdit] = useState<{
    add: boolean;
    edit: boolean;
    delete: boolean;
  }>({
    add: false,
    edit: false,
    delete: false,
  });

  const fetchClasses = React.useCallback(async () => {
    const response = await axios.get(`http://localhost:5000/api/class`);
    const classesOrganized = response.data.sort(
      (a: ClassesProps, b: ClassesProps) => a.id - b.id
    );
    setClasses(classesOrganized);
  }, []);

  const fetchClass = React.useCallback(async () => {
    if (!nameClassId) {
      setName("");
      setGrade("");
      setPeriod("");
      return;
    }
    const id = Number(nameClassId);
    await axios
      .get(`http://localhost:5000/api/class/${id}`)
      .then((response) => {
        setName(response.data.name);
        setGrade(response.data.grade);
        setPeriod(response.data.period);
      });
  }, [nameClassId]);

  const addClass = async (event: React.FormEvent) => {
    event.preventDefault();
    await axios
      .post(`http://localhost:5000/api/class`, {
        name,
        grade,
        period,
        admin: user?.admin,
      })
      .then(() => {
        setName("");
        setGrade("");
        setPeriod("");
        fetchClasses();
        resetEditState();
      })
      .catch((error) => console.log(error));
  };

  const deleteClass = async () => {
    if (!nameClassId) return;
    const id = Number(nameClassId);
    await axios.delete(`http://localhost:5000/api/class/${id}`).then(() => {
      setNameClassId("");
      resetEditState();
      fetchClasses();
      setGrade("");
      setPeriod("");
      setName("");
    });
  };

  const editClass = async () => {
    const id = Number(nameClassId);
    await axios
      .put(`http://localhost:5000/api/class/${id}`, {
        name,
        grade,
        period,
      })
      .then(() => {
        setName("");
        setGrade("");
        setPeriod("");
        fetchClasses();
        resetEditState();
      });
  };

  const resetEditState = () => {
    setEdit({
      add: false,
      edit: false,
      delete: false,
    });
  };

  React.useEffect(() => {
    fetchClass();
  }, [fetchClass]);

  return (
    <ClassContext.Provider
      value={{
        fetchClasses,
        fetchClass,
        addClass,
        editClass,
        deleteClass,
        classes,
        nameClassId,
        setNameClassId,
        name,
        setName,
        grade,
        setGrade,
        period,
        setPeriod,
        edit,
        setEdit,
        setClasses,
      }}
    >
      {children}
    </ClassContext.Provider>
  );
};

export const useClassContext = () => {
  const context = React.useContext(ClassContext);
  if (!context) {
    throw new Error(
      "useClassContext deve ser usado dentro do CoordinatorProvider"
    );
  }
  return context;
};
