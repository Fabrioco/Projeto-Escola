import { useClassContext } from "@/contexts/classContext";
import { useDisciplineContext } from "@/contexts/disciplineContext";
import { useScheduleContext } from "@/contexts/scheduleContext";
import { useTeacherContext } from "@/contexts/teacherContext";

export function AttributionDisciplineForm() {
  const { allTeachers } = useTeacherContext();
  const { classes } = useClassContext();
  const { disciplines } = useDisciplineContext();
  const { schedules } = useScheduleContext();
  return (
    <div>
      <h1>Atribuir disciplina</h1>

      <form action="">
        <div>
          <label htmlFor="nameTeacher">Professor</label>
          <select name="nameTeacher" id="nameTeacher">
            <option value="" disabled selected>
              Selecione
            </option>
            {allTeachers &&
              allTeachers.map((teacher) => (
                <option key={teacher.id} value={teacher.id}>
                  {teacher.name}
                </option>
              ))}
          </select>
        </div>

        <div>
          <label htmlFor="nameClass">Turma</label>
          <select name="nameClass" id="nameClass">
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

        <div>
          <label htmlFor="nameDiscipline">Disciplina</label>
          <select name="nameDiscipline" id="nameDiscipline">
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

        <div>
          <label htmlFor="time">Horário</label>
          <select name="time" id="time">
            <option value="" disabled selected>
              Selecione
            </option>
            {schedules &&
              schedules.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.time}
                </option>
              ))}
          </select>
        </div>
      </form>
    </div>
  );
}
