import { useCoordinator } from "@/contexts/coordinatorContext";

export function ButtonCoordinator() {
  const { addCoordinator, updateCoordinator, edit } = useCoordinator();
  return (
    <button type="submit" onClick={edit ? updateCoordinator : addCoordinator}>
      {edit ? "Atualizar" : "Cadastrar"}
    </button>
  );
}
