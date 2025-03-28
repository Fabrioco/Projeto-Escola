import { useDisciplineContext } from "@/contexts/disciplineContext";

export const InputNameDiscipline = () => {
  const { name, setName } = useDisciplineContext();
  return (
    <div>
      <label htmlFor="nameDiscipline">Nome</label>
      <input
        type="text"
        id="nameDiscipline"
        name="nameDiscipline"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};
