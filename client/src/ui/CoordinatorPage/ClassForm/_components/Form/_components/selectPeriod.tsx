import { useCoordinatorContext } from "@/contexts/coordinatorContext";

export function SelectPeriod() {
  const { period, setPeriod } = useCoordinatorContext();

  return (
    <div className="w-full flex relative group">
      <select
        name="periodSelectAdd"
        id="periodSelectAdd"
        className="w-full h-full focus:outline-none px-2 py-4 border border-blue-950 rounded-2xl focus:ring-blue-950 focus:border-blue-950 focus:ring-2 cursor-pointer"
        required
        value={period}
        onChange={(e) => setPeriod(e.target.value)}
      >
        <option value="">
          Selecione um período
        </option>
        <option value="Manhã">Manhã</option>
        <option value="Tarde">Tarde</option>
        <option value="Noite">Noite</option>
      </select>
    </div>
  );
}
