"use client";

import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "./authContext";
import { ClassesProps, CoordinatorContextProps, CoordinatorProviderProps } from "@/types/CoordinatorContextType";

const CoordinatorContext = React.createContext<CoordinatorContextProps | null>(
  null
);

export const CoordinatorProvider: React.FC<CoordinatorProviderProps> = ({
  children,
}) => {
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

  const fetchClasses = async () => {
    const response = await axios.get(`http://localhost:5000/api/class`);
    const classesOrganized = response.data.sort(
      (a: ClassesProps, b: ClassesProps) => a.id - b.id
    );
    setClasses(classesOrganized);
  };

  const fetchClass = async () => {
    if (!nameClassId) {
      setName("");
      setGrade("");
      setPeriod("");
      return;
    }
    const id = Number(nameClassId);
    const response = await axios.get(`http://localhost:5000/api/class/${id}`);
    setName(response.data.name);
    setGrade(response.data.grade);
    setPeriod(response.data.period);
  };

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

  return (
    <CoordinatorContext.Provider
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
    </CoordinatorContext.Provider>
  );
};

export const useCoordinatorContext = () => {
  const context = React.useContext(CoordinatorContext);
  if (!context) {
    throw new Error(
      "useCoordinatorContext deve ser usado dentro do CoordinatorProvider"
    );
  }
  return context;
};
