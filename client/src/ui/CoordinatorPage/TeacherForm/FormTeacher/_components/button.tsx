import { useTeacherContext } from "@/contexts/teacherContext";

export function ButtonTeacher() {
  const { edit } = useTeacherContext();
  return <button type="submit">{edit ? "Atualizar" : "Cadastrar"}</button>;
}
