import { useDisciplineContext } from "@/contexts/DisciplineContext";
import { Trash } from "@phosphor-icons/react";

export function TableDiscipline() {
  const { disciplines, fetchDiscipline, deleteDiscipline } =
    useDisciplineContext();
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Serie</th>
        </tr>
      </thead>
      <tbody>
        {disciplines.map((discipline) => (
          <tr key={discipline.id}>
            <td onClick={() => fetchDiscipline(discipline.id)}>
              {discipline.name}
            </td>
            <td>{discipline.grade}</td>
            <td>
              <Trash
                size={20}
                weight="bold"
                onClick={() => deleteDiscipline(discipline.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
