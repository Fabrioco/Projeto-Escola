import { useTeacherContext } from "@/contexts/teacherContext";

export function InputNameTeacher() {
  const { name, setName } = useTeacherContext();
  return (
    <div>
      <label htmlFor="name">Nome</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
