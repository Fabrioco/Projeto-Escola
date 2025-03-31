import { useAttributionDisciplineContext } from "@/contexts/attributionDisciplineContext";
import { useClassContext } from "@/contexts/classContext";
import { useDisciplineContext } from "@/contexts/disciplineContext";
import { useScheduleContext } from "@/contexts/scheduleContext";
import { useTeacherContext } from "@/contexts/teacherContext";
import { Trash } from "@phosphor-icons/react";

export function TableAttribution() {
  const { allAttributions, fetchAttribution, deleteAttribution } =
    useAttributionDisciplineContext();
  const { allTeachers } = useTeacherContext();
  const { disciplines } = useDisciplineContext();
  const { classes } = useClassContext();
  const { schedules } = useScheduleContext();
  return (
    <table>
      <thead>
        <tr>
          <th>Professor</th>
          <th>Disciplina</th>
          <th>Turma</th>
          <th>Horário</th>
        </tr>
      </thead>
      <tbody>
        {allAttributions &&
          allAttributions.map((a) => (
            <tr key={a.id}>
              <td onClick={() => fetchAttribution(a.id)}>
                {allTeachers.find((t) => t.id === a.teacher_id)?.name}
              </td>
              <td>{disciplines.find((d) => d.id === a.discipline_id)?.name}</td>
              <td>{classes?.find((c) => c.id === a.class_id)?.name}</td>
              <td>{schedules.find((s) => s.id === a.time_id)?.time}</td>
              <td>
                <Trash
                  size={20}
                  weight="bold"
                  onClick={() => deleteAttribution(a.id)}
                />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
