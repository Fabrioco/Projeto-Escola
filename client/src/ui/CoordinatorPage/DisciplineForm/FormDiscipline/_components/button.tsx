import { useDisciplineContext } from "@/contexts/DisciplineContext";

export const ButtonFormDiscipline = () => {
  const { edit } = useDisciplineContext();
  return <button type="submit">{edit ? "Atualizar" : "Cadastrar"}</button>;
};
