import { useCoordinatorContext } from "@/contexts/coordinatorContext";
import { ButtonForm } from "./_components/buttonForm";
import { InputGradeClass } from "./_components/inputGradeClass";
import { InputNameClass } from "./_components/inputNameClass";
import { SelectPeriod } from "../selectPeriod";
import { Trash, ArrowClockwise, Plus } from "@phosphor-icons/react/dist/ssr";

export function Form() {
  const { edit, addClass, editClass, deleteClass } = useCoordinatorContext();
  return (
    <form onSubmit={addClass} className={`flex flex-col gap-2 w-11/12 p-2`}>
      <InputNameClass />

      <InputGradeClass />

      <SelectPeriod />

      <div className="flex justify-end mt-4">
        {edit.add && (
          <ButtonForm onclick={addClass}>
            Adicionar <Plus size={20} weight="bold" />
          </ButtonForm>
        )}
        {edit.edit && (
          <ButtonForm onclick={editClass}>
            Editar <ArrowClockwise size={20} weight="bold" />
          </ButtonForm>
        )}
        {edit.delete && (
          <ButtonForm onclick={deleteClass}>
            Remover <Trash size={20} weight="bold" />
          </ButtonForm>
        )}
      </div>
    </form>
  );
}
