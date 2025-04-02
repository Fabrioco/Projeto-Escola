import { useAttributionDisciplineContext } from "@/contexts/attributionDisciplineContext";
import { InputTeacher } from "./_components/inputTeacher";
import { InputClass } from "./_components/inputClass";
import { InputDiscipline } from "./_components/inputDiscipline";
import { InputSchedule } from "./_components/inputSchedule";

export function FormAttribution() {
  const { edit, addAttribution, updateAttribution } =
    useAttributionDisciplineContext();
  return (
    <form onSubmit={edit ? updateAttribution : addAttribution}>
      <InputTeacher />
      <InputClass />
      <InputDiscipline />
      <InputSchedule />

      <button type="submit">{edit ? "Atualizar" : "Cadastrar"}</button>
    </form>
  );
}
