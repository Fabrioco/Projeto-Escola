import { useStudentContext } from "@/contexts/studentContext";

export function ButtonClear() {
    const { cleanForm } = useStudentContext();
    return (
        <button type="button" onClick={cleanForm}>Limpar campos</button>
    );
}