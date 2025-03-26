import { useStudentContext } from "@/contexts/studentContext";

export function SelectClassStudent() {
  const { classId, setClassId } = useStudentContext();
  return (
    <div>
      <label htmlFor="class">Turma</label>
      <select
        id="classId"
        name="classId"
        value={classId}
        onChange={(e) => setClassId(e.target.value)}
      ></select>
    </div>
  );
}
