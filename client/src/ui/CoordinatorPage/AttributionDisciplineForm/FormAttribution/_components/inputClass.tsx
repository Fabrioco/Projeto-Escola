import { useAttributionDisciplineContext } from "@/contexts/attributionDisciplineContext";
import { useClassContext } from "@/contexts/classContext";

export function InputClass() {
  const { classId, setClassId } = useAttributionDisciplineContext();
  const { classes } = useClassContext();
  return (
    <div>
      <label htmlFor="nameClass">Turma</label>
      <select
        name="nameClass"
        id="nameClass"
        value={classId}
        onChange={(e) => setClassId(e.target.value)}
      >
        <option value="" disabled selected>
          Selecione
        </option>
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
