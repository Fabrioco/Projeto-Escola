import { useTeacherContext } from "@/contexts/teacherContext";

export function ButtonClearFormTeacher() {
  const { clearForm } = useTeacherContext();
  return (
    <button onClick={clearForm} type="button">
      Limpar
    </button>
  );
}
