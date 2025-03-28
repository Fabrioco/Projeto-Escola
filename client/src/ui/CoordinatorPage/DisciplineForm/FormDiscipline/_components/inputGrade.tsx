import { useDisciplineContext } from "@/contexts/disciplineContext";

export const InputGradeDiscipline = () => {
  const { grade, setGrade } = useDisciplineContext();
  return (
    <div>
      <label htmlFor="gradeDiscipline">Serie</label>
      <input
        type="text"
        id="gradeDiscipline"
        name="gradeDiscipline"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
      />
    </div>
  );
};
