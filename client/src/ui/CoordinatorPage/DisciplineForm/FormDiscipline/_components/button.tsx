import { useDisciplineContext } from "@/contexts/disciplineContext";

export const ButtonFormDiscipline = () => {
  const { edit } = useDisciplineContext();
  return <button type="submit">{edit ? "Atualizar" : "Cadastrar"}</button>;
};
