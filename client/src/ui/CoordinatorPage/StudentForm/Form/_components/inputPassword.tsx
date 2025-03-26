import { useStudentContext } from "@/contexts/studentContext";

export function InputPasswordStudent() {
  const { password, setPassword } = useStudentContext();
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
