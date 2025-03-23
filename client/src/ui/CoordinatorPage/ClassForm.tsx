"use client";
import { useAuth } from "@/contexts/authContext";
import axios from "axios";
import { useEffect, useState } from "react";

type ClassesProps = {
  id: number;
  name: string;
  grade: string;
  period: string;
};

export function ClassForm() {
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
    setClasses(response.data);
  };

  useEffect(() => {
    fetchClass();
  }, [nameClassId]);

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

  useEffect(() => {
    fetchClasses();
  }, []);

  const handleGradeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    const numberMatch = inputValue.match(/\d+/g);
    const letterMatch = inputValue.match(/[A-Za-z]+/g);

    const number = numberMatch ? numberMatch[0] : "";
    const letter = letterMatch ? letterMatch[0].toUpperCase() : "";

    const formatted = number && letter ? `${number}° ${letter}` : inputValue;

    setGrade(formatted);
  };

  const resetEditState = () => {
    setEdit({
      add: false,
      edit: false,
      delete: false,
    });
  };

  return (
    <div className="bg-white w-11/12 md:w-1/2 xl:w-1/3 min-h-[400px] rounded-xl border border-blue-950 shadow-md mt-4 p-2 flex flex-col items-center justify-around">
      <h1 className="text-2xl font-semibold uppercase text-blue-950">Turmas</h1>
      <select
        name="selectClass"
        id="selectClass"
        value={nameClassId}
        onChange={(e) => setNameClassId(e.target.value)}
      >
        <option value="" selected>
          Selecione uma turma
        </option>
        {classes?.map((classItem) => (
          <option key={classItem.id} value={classItem.id}>
            {classItem.name} - {classItem.grade} - {classItem.period}
          </option>
        ))}
      </select>

      <form onSubmit={addClass}>
        <div>
          <label htmlFor="nameClass">Nome da sala</label>
          <input
            type="text"
            id="nameClass"
            name="nameClass"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="grade">Serie</label>
          <input
            type="text"
            id="grade"
            name="grade"
            required
            value={grade}
            onChange={handleGradeChange}
          />
        </div>

        <div>
          <label htmlFor="periodSelectAdd">Período</label>
          <select
            name="periodSelectAdd"
            id="periodSelectAdd"
            required
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          >
            <option value="" disabled selected>
              Selecione
            </option>
            <option value="Manhã">Manhã</option>
            <option value="Tarde">Tarde</option>
            <option value="Noite">Noite</option>
          </select>
        </div>

        {edit.add && (
          <button type="submit" onClick={addClass}>
            Adicionar
          </button>
        )}
        {edit.edit && (
          <button type="button" onClick={editClass}>
            Atualizar
          </button>
        )}
        {edit.delete && (
          <button type="button" onClick={deleteClass}>
            Remover
          </button>
        )}
      </form>

      <div className="flex gap-2">
        <button
          className="bg-blue-950 text-white px-4 py-2 rounded-md border border-blue-950"
          type="button"
          onClick={() => setEdit({ add: true, edit: false, delete: false })}
        >
          Adicionar
        </button>
        <button
          className="bg-blue-950 text-white px-4 py-2 rounded-md border border-blue-950"
          type="button"
          onClick={() => setEdit({ add: false, edit: true, delete: false })}
        >
          Editar
        </button>
        <button
          className="bg-red-400 text-white px-4 py-2 rounded-md border border-red-400"
          type="button"
          onClick={() => setEdit({ add: false, edit: false, delete: true })}
        >
          Remover
        </button>
      </div>
    </div>
  );
}
