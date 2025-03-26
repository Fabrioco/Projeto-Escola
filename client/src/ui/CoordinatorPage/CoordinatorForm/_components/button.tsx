import { useCoordinator } from "@/contexts/coordinatorContext";

export function ButtonClearFormCoordinator() {
  const { clearForm } = useCoordinator();
  return (
    <button type="button" onClick={clearForm}>
      Limpar
    </button>
  );
}
