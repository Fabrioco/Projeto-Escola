import { useDisciplineContext } from "@/contexts/disciplineContext";

export function ButtonClearForm() {
  const { clearForm } = useDisciplineContext();
  return (
    <button type="button" onClick={clearForm}>
      Limpar
    </button>
  );
}
