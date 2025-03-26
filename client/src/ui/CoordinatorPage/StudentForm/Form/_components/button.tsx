import { useStudentContext } from "@/contexts/studentContext";

export function ButtonFormStudent() {
  const { edit, addStudent, updateStudent } = useStudentContext();
  return (
    <button type="button" onClick={edit ? () => updateStudent() : addStudent}>
      {edit ? "Editar" : "Cadastrar"}
    </button>
  );
}
