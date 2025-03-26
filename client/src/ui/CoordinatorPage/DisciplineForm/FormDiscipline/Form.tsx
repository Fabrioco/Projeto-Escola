import { useDisciplineContext } from "@/contexts/DisciplineContext";
import { InputNameDiscipline } from "./_components/inputName";
import { InputGradeDiscipline } from "./_components/inputGrade";

export function FormDiscipline() {
  const { edit, addDiscipline, updateDiscipline } = useDisciplineContext();
  return (
    <form onSubmit={edit ? updateDiscipline : addDiscipline}>
      <InputNameDiscipline />

      <InputGradeDiscipline />
    </form>
  );
}
