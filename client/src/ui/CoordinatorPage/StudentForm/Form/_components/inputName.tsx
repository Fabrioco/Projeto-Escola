import { useStudentContext } from "@/contexts/studentContext";

export function InputNameStudent() {
  const { nameStudent, setNameStudent } = useStudentContext();
  return (
    <div>
      <label htmlFor="nameStudent">Nome</label>
      <input
        type="text"
        id="nameStudent"
        name="nameStudent"
        value={nameStudent}
        onChange={(e) => setNameStudent(e.target.value)}
      />
    </div>
  );
}
