import { useTeacherContext } from "@/contexts/teacherContext";

export function InputPasswordTeacher() {
  const { password, setPassword } = useTeacherContext();
  return (
    <div>
      <label htmlFor="password">Senha</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
}
