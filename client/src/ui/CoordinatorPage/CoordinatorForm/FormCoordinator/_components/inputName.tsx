import { useCoordinator } from "@/contexts/coordinatorContext";

export function InputNameCoordinator() {
  const { name, setName } = useCoordinator();
  return (
    <div>
      <label htmlFor="nameCoordinator">Nome</label>
      <input
        type="text"
        id="nameCoordinator"
        name="nameCoordinator"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
