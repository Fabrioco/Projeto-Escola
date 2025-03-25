import { useClassContext } from "@/contexts/classContext";
import React from "react";

export function SelectClass() {
  const { nameClassId, setNameClassId, fetchClasses, classes } =
    useClassContext();

  React.useEffect(() => {
    fetchClasses();
  }, [fetchClasses]);
  return (
    <div className="w-full flex relative group mt-4">
      <select
        name="classSelectAdd"
        id="classSelectAdd"
        className="w-full h-full focus:outline-none px-2 py-4 border border-blue-950 rounded-2xl focus:ring-blue-950 focus:border-blue-950 focus:ring-2 cursor-pointer"
        required
        value={nameClassId}
        onChange={(e) => setNameClassId(e.target.value)}
      >
        <option value="">Selecione uma turma</option>
        {classes &&
          classes.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name} - {c.period} - {c.grade}
            </option>
          ))}
      </select>
    </div>
  );
}
