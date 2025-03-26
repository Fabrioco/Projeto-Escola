import { useTeacherContext } from "@/contexts/teacherContext";
import { Trash } from "@phosphor-icons/react";

export function TableTeacher() {
  const { allTeachers, fetchTeacher, setEdit, deleteTeacher } =
    useTeacherContext();
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {allTeachers &&
          allTeachers.map((teacher) => (
            <tr key={teacher.id}>
              <td
                onClick={() => {
                  fetchTeacher(teacher.id);
                  setEdit(true);
                }}
              >
                {teacher.name}
              </td>
              <td>{teacher.email}</td>
              <td>
                <Trash
                  onClick={() => deleteTeacher(teacher.id)}
                  size={20}
                  weight="bold"
                />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
