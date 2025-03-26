import { useTeacherContext } from "@/contexts/teacherContext";

export function InputEmailTeacher() {
  const { email, setEmail } = useTeacherContext();
  return (
    <div>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
}
