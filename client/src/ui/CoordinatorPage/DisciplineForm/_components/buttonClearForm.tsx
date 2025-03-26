import { useDisciplineContext } from "@/contexts/DisciplineContext";

export function ButtonClearForm() {
  const { clearForm } = useDisciplineContext();
  return (
    <button type="button" onClick={clearForm}>
      Limpar
    </button>
  );
}
