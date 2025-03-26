import { useStudentContext } from "@/contexts/studentContext";
import { Trash } from "@phosphor-icons/react/dist/ssr";

export function TableStudent() {
  const { students, classesList, handlePullData, deleteStudent } =
    useStudentContext();
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Turma</th>
          <th>Período</th>
        </tr>
      </thead>
      <tbody>
        {students &&
          students.map((s) => (
            <tr key={s.id}>
              <td onClick={() => handlePullData(s.id)}>{s.name}</td>
              <td>{s.email}</td>
              <td>{classesList.find((c) => c.id === s.class_id)?.name}</td>
              <td>{s.period}</td>
              <td>
                <span onClick={() => deleteStudent(s.id)}>
                  <Trash size={20} weight="bold" />
                </span>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
