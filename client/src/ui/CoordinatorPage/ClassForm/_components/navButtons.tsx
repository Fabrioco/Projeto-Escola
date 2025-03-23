import { useCoordinatorContext } from "@/contexts/coordinatorContext";
import { ButtonNav } from "./buttonNav";

export function NavButtons() {
  const { setEdit, setNameClassId } = useCoordinatorContext();
  return (
    <div className="flex gap-2 m-4">
      <ButtonNav
        onclick={() => {
          setEdit({ add: true, edit: false, delete: false });
          setNameClassId("");
        }}
        title="Adicionar"
      />
      <ButtonNav
        onclick={() => setEdit({ add: false, edit: true, delete: false })}
        title="Editar"
      />

      <ButtonNav
        onclick={() => setEdit({ add: false, edit: false, delete: true })}
        title="Remover"
      />
    </div>
  );
}
