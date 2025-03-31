import { useAttributionDisciplineContext } from "@/contexts/attributionDisciplineContext";
import { useTeacherContext } from "@/contexts/teacherContext";

export function InputTeacher() {
  const { teacherId, setTeacherId } = useAttributionDisciplineContext();
  const { allTeachers } = useTeacherContext();
  return (
    <div>
      <label htmlFor="nameTeacher">Professor</label>
      <select
        name="nameTeacher"
        id="nameTeacher"
        value={teacherId}
        onChange={(e) => setTeacherId(e.target.value)}
      >
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
  );
}
