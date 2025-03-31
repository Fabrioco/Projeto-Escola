"use client";
import {
  AttributionContextType,
  AttributionPropsType,
  AttributionProviderType,
} from "@/types/AttributionContextType";
import axios from "axios";
import React from "react";
import { useAuth } from "./authContext";
import { DisciplineProps } from "@/types/DisciplineContextType";

const AttributionDisciplineContext =
  React.createContext<AttributionContextType | null>(null);

export const AttributionDisciplineProvider: React.FC<
  AttributionProviderType
> = ({ children }) => {
  const { user } = useAuth();

  const [allAttributions, setAllAttributions] = React.useState<
    AttributionPropsType[]
  >([]);
  const [teacherId, setTeacherId] = React.useState<string>("");
  const [classId, setClassId] = React.useState<string>("");
  const [disciplineId, setDisciplineId] = React.useState<string>("");
  const [timeId, setTimeId] = React.useState<string>("");
  const [edit, setEdit] = React.useState<boolean>(false);
  const [id, setId] = React.useState<number>(0);

  const fetchAllAttributions = async () => {
    await axios
      .get("http://localhost:5000/api/attribution")
      .then((res) => {
        console.log(res.data);
        setAllAttributions(
          res.data.sort((a: DisciplineProps, b: DisciplineProps) => a.id - b.id)
        );
      })
      .catch((error) => console.log(error));
  };

  const addAttribution = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/attribution", {
        teacher_id: Number(teacherId),
        class_id: Number(classId),
        discipline_id: Number(disciplineId),
        time_id: Number(timeId),
        admin: user?.admin,
      })
      .then((res) => {
        console.log(res.data);
        fetchAllAttributions();
      })
      .catch((error) => console.log(error));
  };

  const fetchAttribution = async (id: number) => {
    setEdit(true);
    await axios
      .get(`http://localhost:5000/api/attribution/${id}`)
      .then((res) => {
        console.log(res.data);
        setId(res.data.id);
        setTeacherId(res.data.teacher_id);
        setClassId(res.data.class_id);
        setDisciplineId(res.data.discipline_id);
        setTimeId(res.data.time_id);
      })
      .catch((error) => console.log(error));
  };

  const updateAttribution = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:5000/api/attribution/${id}`, {
        teacher_id: Number(teacherId),
        class_id: Number(classId),
        discipline_id: Number(disciplineId),
        time_id: Number(timeId),
        admin: user?.admin,
      })
      .then((res) => {
        console.log(res.data);
        clearForm();
        fetchAllAttributions();
      })
      .catch((error) => console.log(error));
  };

  const deleteAttribution = async (id: number) => {
    await axios
      .delete(`http://localhost:5000/api/attribution/${id}`)
      .then((res) => {
        console.log(res.data);
        fetchAllAttributions();
      })
      .catch((error) => console.log(error));
  };

  const clearForm = () => {
    setTeacherId("");
    setClassId("");
    setDisciplineId("");
    setTimeId("");
  };

  React.useEffect(() => {
    fetchAllAttributions();
  }, []);

  return (
    <AttributionDisciplineContext.Provider
      value={{
        fetchAllAttributions,
        fetchAttribution,
        allAttributions,
        addAttribution,
        updateAttribution,
        deleteAttribution,
        teacherId,
        setTeacherId,
        classId,
        setClassId,
        disciplineId,
        setDisciplineId,
        timeId,
        setTimeId,
        edit,
      }}
    >
      {children}
    </AttributionDisciplineContext.Provider>
  );
};

export const useAttributionDisciplineContext = () => {
  const context = React.useContext(AttributionDisciplineContext);
  if (!context) {
    throw new Error(
      "useAttributionDisciplineContext deve ser usado dentro do AttributionDisciplineProvider"
    );
  }
  return context;
};
