import { useClassContext } from "@/contexts/classContext";

export function InputNameClass() {
  const { name, setName } = useClassContext();
  return (
    <div className="w-full flex relative group">
      <label
        htmlFor="nameClass"
        className={`absolute left-2 group-focus-within:top-0 group-focus-within:text-gray-500 transition-all duration-150 ease-in-out text-base group-focus-within:text-sm cursor-pointer ${
          name ? "top-0 text-gray-500 text-sm" : "top-3 text-base"
        }`}
      >
        Nome da sala
      </label>
      <input
        type="text"
        id="nameClass"
        name="nameClass"
        className="w-full h-full focus:outline-none px-2 py-4 border border-blue-950 rounded-2xl focus:ring-blue-950 focus:border-blue-950 focus:ring-2 cursor-pointer
            focus:placeholder:text-gray-500 placeholder:text-gray-500/0"
        placeholder="Ex.: Sala 1"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
