export function SelectInput() {
  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor="role" className="text-left w-11/12 mx-auto">
        Eu sou:
      </label>
      <select
        name="role"
        id="role"
        className="w-full h-full focus:outline-none px-2 py-4 border border-blue-950 rounded-2xl focus:ring-blue-950 focus:border-blue-950 focus:ring-2 cursor-pointer"
      >
        <option value="student">Estudante</option>
        <option value="teacher">Professor</option>
        <option value="coordinator">Coordenador</option>
      </select>
    </div>
  );
}
