import { useAttributionDisciplineContext } from "@/contexts/attributionDisciplineContext";
import { useDisciplineContext } from "@/contexts/disciplineContext";

export function InputDiscipline() {
  const { disciplineId, setDisciplineId } = useAttributionDisciplineContext();
  const { disciplines } = useDisciplineContext();
  return (
    <div>
      <label htmlFor="nameDiscipline">Disciplina</label>
      <select
        name="nameDiscipline"
        id="nameDiscipline"
        value={disciplineId}
        onChange={(e) => setDisciplineId(e.target.value)}
      >
        <option value="" disabled selected>
          Selecione uma disciplina
        </option>
        {disciplines &&
          disciplines.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
      </select>
    </div>
  );
}
